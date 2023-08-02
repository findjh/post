h5项目使用uniapp的能力

```js
UniService.subscribe('getLocation', {
    success: (res) => {
        console.log('获取到定位信息：', res);
        resolve(res);
    },
    fail: (err) => {
        console.log(err);
        showToast(err.error.errMsg);
    },
});
```

- uniapp 项目：

```vue
<!--index.vue-->
<template>
	<view>
		<web-view src="http://192.168.0.83:3000/home" @message="message"></web-view>
		<!-- http://192.168.0.5/m-lianjiang/home -->
		<!-- http://192.168.0.83:3000/home -->
	</view>
</template>

<script>
	import sdk from '../../sdk/index.js'
	var wv; //计划创建的webview
	export default {
		data() {
			return {
				canBack: false,
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			let height = 0; //定义动态的高度变量
			let statusbar = 0; // 动态状态栏高度
			let safeAreaInsetsBottom = 0; // 底部安全区高度
			uni.getSystemInfo({ // 获取当前设备的具体信息
				success: (sysinfo) => {
					statusbar = sysinfo.statusBarHeight;
					height = sysinfo.windowHeight;
					safeAreaInsetsBottom = sysInfo.safeAreaInsets.bottom;
				}
			});
			let currentWebview = this.$scope.$getAppWebview(); //获取当前web-view
			setTimeout(function() {
				wv = currentWebview.children()[0];
				wv.setStyle({ //设置web-view距离顶部的距离以及自己的高度，单位为px
					top: statusbar, //此处是距离顶部的高度，应该是你页面的头部
					height: height - statusbar - safeAreaInsetsBottom, //webview的高度
				})
				wv.addEventListener(
					'progressChanged',
					function(e) {
						wv.canBack(function(e) {
							self.canBack = e.canBack;
						});
					},
					false
				);
			}, 200); //如页面初始化调用需要写延迟
			// #endif
		},
		onReady() {},
		onBackPress() {
			if (wv && this.canBack) {
				wv.back();
				return true;
			}
			return false;
		},
		methods: {
			// 获取H5页面消息
			async message(e) {
				let that = this;
				let eventParams = e?.detail?.data.length ? e?.detail?.data[0] : {};
				// params是参数 type是执行的方法名
				let {
					params = null, type
				} = eventParams;
				// 从sdk中解构出对应的方法，没有匹配上就用sdk默认的defaultFn匹配下
				let {
					[type]: func = sdk['defaultFn']
				} = sdk;
				// 默认服务为成功，type为方法名，返回给H5时候，H5可以知道是那个方法执行的
				let serviceMsg = {
					status: 'success',
					type: type
				};
				// 执行方法，如果方法报错则在catch中设置执行为失败状态
				let res = await func(params).catch((err) => {
					serviceMsg.status = 'fail'
					serviceMsg = {
						...serviceMsg,
						error: err
					}
				})
				serviceMsg = {
					...serviceMsg,
					...res
				}
				// 开始执行，通知H5执行完成，把结果返回去
				that.postH5Mes(serviceMsg);
			},
			postH5Mes(msg) {
				// 如果当前没有webview实例，则重新赋值一次，该操作是避免H5一开始调用wv还未生成报ecalJS 未定义, 在页面初始化的时候也要赋值一下给wv,就是下面if里面的语句，我没写而已~
				// #ifdef APP-PLUS
				if (!wv) {
					let currentWebview = this.$scope.$getAppWebview();
					wv = currentWebview.children()[0];
				}
				// 自定义方法getUNIMsg
				wv.evalJS("document.dispatchEvent(new CustomEvent('noticeH5',{detail: {msg:" + JSON.stringify(msg) + "}}))")
				// #endif
			},

		}
	}
</script>
```



```js
//sdk.js
// 下载的文件拷贝到指定位置
const downloadFile = (sFileName, downloadurl) => {
	return new Promise((resolve, reject) => {
		let dtask = plus.downloader.createDownload(downloadurl, {
				filename: "file://storage/emulated/0/lianjiang/" + sFileName //在手机存储更目录创建一个文件夹，把文件存储进去，并更改会原名
			},
			(d, status) => {
				if (status == 200) {
					console.log('下载成功');
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '文件下载成功', //保存路径
						duration: 2000,
					})
					let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
					resolve({fileSaveUrl})
				} else {
					plus.downloader.clear(); //清除下载任务
					reject('下载失败')
				}
			})
		dtask.start();
	})
};
// 修改状态栏
const changeNavBar = (fColor = "#000000", bgColor = "#007AFF00") => {
	return uni.setNavigationBarColor({
		frontColor: fColor, // 导航栏文字设置
		backgroundColor: bgColor // 导航栏背景色设置
	})
};

const getLocation = (obj = {}) => {	
	let params = {
		type: 'wgs84', //gcj02
		...obj
	}
	return new Promise((resolve,reject)=>{	
		uni.getLocation({
			...params,
			success: (res) => {
				resolve({latitude: res.latitude, longitude: res.longitude})
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
};
const defaultFn = ()=>{
	return Promise.reject('uniapp中没有该方法')
}
export default {
	downloadFile,
	changeNavBar,
	getLocation
}
```



- webview的h5项目：

```html
<!--index.html-->
 <script type="module" src="/src/main.ts"></script>
<!-- 微信 JS-SDK 如果不需要兼容小程序，则无需引用此 JS 文件。 -->
<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
<!-- uni 的 SDK，必须引用。 -->
<!-- <script type="text/javascript" src="//js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.0.1.52.js"></script> -->
<script type="text/javascript" src="https://unpkg.com/@dcloudio/uni-webview-js@0.0.3/index.js"></script>
```



```js
/**
 * uniapp 与 h5 通信(发布订阅模式): https://juejin.cn/post/7230737419842666556
 *
 */
export default class UniService {
  VALUE = null; // 调取uni服务后回来的值

  UNI = window.uni; // 保存uni的值

  Dep = {}; // 调度中心，状态变更通知更新

  // 缓存，主要是进入h5页面立即要更新的话，用它缓存下来 等uniapp webView可通信后执行
  // 因为一开始调用的时候，webview还没加载完 通信是不成功的
  cache = [];

  constructor() {
    // 监听Uni向H5发送结果的回调
    this._ListenDocument();
    // 监听可通信后的回调，主要用于cache缓存的执行
    this._ListenUniLinkH5();
  }

  /**
   * 要调用uni的方法
   * @type {*} 你sdk.js里面写的方法名
   * @param {*} params 参数
   */
  subscribe = (type, params) => {
    if (!type) {
      throw new Error('_Subscribe需要接受一个type属性进行注册');
    }
    //  默认从参数中解构出成功与失败的回调，待响应结果之后进行推送
    let { success, fail, ...argsObj } = params;

    if (!argsObj) argsObj = {};

    success = success && typeof success === 'function' ? success : () => this.VALUE;
    fail = fail && typeof fail === 'function' ? fail : () => this.VALUE;

    // 注册该类型的属性
    if (!this.Dep[type]) this.Dep[type] = [];

    this.Dep[type].push(success);
    this.Dep[type].push(fail);
    this.SendToUni(type, argsObj);
  };

  /**
   *  获取Uni传输过来的数据
   * @param {*} type uni服务类型
   * @param {*} params 参数
   * @returns null
   */
  receiveUniInfo = (e) => {
    this.VALUE = e.detail.msg || {};
    const { status = 'fail', type } = this.VALUE;
    if (!this.Dep[type]) return;
    if (status === 'success') {
      this.Dep[type][0](this.VALUE);
    }
    if (status === 'fail') {
      this.Dep[type][1](this.VALUE);
    }
    this.Dep[type] = [];
  };

  /**
   * 通信：发送信息给uni
   * @param {*} type uni服务类型
   * @param {*} params 参数
   * @returns null
   */
  SendToUni = (type, params) => {
    const serviceUni = this.UNI || window.uni;
    this.VALUE = null;
    serviceUni.postMessage({
      data: {
        type,
        params,
      },
    });
  };

  /**
   * 这个是如果一开始调用的话 则将它加入到缓存中
   */
  setInitCallBack = (cbArr) => {
    if (cbArr && Array.isArray(cbArr)) {
      cbArr.forEach((el) => {
        if (typeof el === 'function') {
          this.cache.push(el);
        }
      });
    }
  };

  /**
   * 通信：监听document getUNIMsg
   * @param {*} type uni服务类型
   * @param {*} params 参数
   * @returns null
   */
  _ListenDocument = () => {
    document.addEventListener('noticeH5', this.receiveUniInfo, false);
  };

  /**
   * 通信：监听 通信桥梁是否搭建完成
   * @returns null
   */
  _ListenUniLinkH5 = () => {
    document.addEventListener('UniAppJSBridgeReady', this._UniAppJSBridgeReady, false);
  };

  /**
   * 缓存钩子，有则取出来执行
   * @returns null
   */
  _UniAppJSBridgeReady = () => {
    if (this.cache.length) {
      this.cache.forEach((el) => {
        el();
      });
      this.cache = [];
    }
  };
}
(() => {
  if (!window.UniService) {
    window.UniService = new UniService();
  }
})();

```




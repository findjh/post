## 语法
#### Omit< key:value,key>
- 作用：基于已经声明的类型进行属性剔除获得新类型
- 用例：
   ```js
    type User = {
        id: string;
        name: string;
        email: string;
    };
    type UserWithoutEmail = Omit<User, "email">;// UserWithoutEmail ={id: string;name: string;}
    ```

#### Pick< key:value,key>
- 作用：从KeyValue中挑选出部分Key对应的类型当作新类型使用（与omit相反，omit是剔除声明项，pick是挑选声明项）
- 用例：
 ```js
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    type TodoPreview = Pick<Todo, "title" | "completed">;
    const todo: TodoPreview = {
        title: "Clean room",
        completed: false
    };
```
#### Exclude<T,U>
- 作用：T中取T、U交集的补集
- 与Omit作比较：
  -  Omit左右两个参数属于不同类型，左是一个完整的类型，包含key、value
  -  Exclude左右两个参数属于同种类型
- 用例
 ```js
    type T0 = Exclude<"a" | "b" | "c", "a">;      
    // "b" | "c"
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;     
    // "c"
    type T2 = Exclude<string | number | (() => void), Function>; 
    // string | number
```

## 比较
- 相同点
    - 三种工具类都是使用已有的类型进行属性过滤获得新的类型
    - Omit和Exclude都是做属性剔除
    - Omit和Pick的参数类型都是<{key:value},key>
- 不同点
    - Exclude的参数类型没有限制，可以是字面量也可以是具体的类型如string、boolean等，而Omit和Pick的第二参数则必须是第一参数的子属性
- Pick搭配Exclude实现Omit：Exclude先剔除不要的键名，挑出想要的键名，Pick再从键值对中根据键名挑选出来。
  实现公式：`Omit=Pick<T,Exclude<keyof T,K>>`。其中：`T:<key,value>` `K:key`



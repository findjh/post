### @JoinColumn
- 在一对一关系中，@JoinColumn 只需要加到其中一张表的字段上. 比如PhotoMetadata和Photo是一对一，
如果2张表都加了@JoinColumn只会在其中一张表增加一个外键字段 photoId 或者 metadataId
```ts

@Entity()
export class PhotoMetadata {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int")
    height: number

    @Column("int")
    width: number

    @Column()
    orientation: string

    @Column()
    compressed: boolean

    @Column()
    comment: string

    @OneToOne(() => Photo, (photo)=> photo.metadata )
    @JoinColumn()
    photo: Photo
}

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("double")
    views: number

    @Column()
    isPublished: boolean

    // @JoinColumn() 不用加这个，因为PhotoMetadata 已经有了JoinColumn了
    @OneToOne(()=> PhotoMetadata, (photoMetadata)=> photoMetadata.photo)
    metadata: PhotoMetadata
}
```

### cascade 表示保存实体类型时，也把关联的实体保存

```ts

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    // @JoinColumn()
    @OneToOne(()=> PhotoMetadata, (photoMetadata)=> photoMetadata.photo,{
        cascade: true 
    })
    metadata: PhotoMetadata
}
```
```ts
    // create a photo
    const photo = new Photo()
    photo.name = "6beautiful"
    photo.isPublished = true

    // create a photo metadata
    const metadata = new PhotoMetadata()
    metadata.orientation = "portrait"
    metadata.photo = photo // this way we connect them

    photo.metadata = metadata;
    const photoRepository = AppDataSource.getRepository(Photo)
    await photoRepository.save(photo); // 因为photo的metadata字段有cascade, 因此保存photo,也会把metadata一起save，
    // 下面不用再写
    // const metadataRepository = AppDataSource.getRepository(PhotoMetadata)
    // await metadataRepository.save(metadata)
```

### manyToMany 似乎无法用cascade
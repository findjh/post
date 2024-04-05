- 每次修改schema，都要执行一下`prisma migrate dev`

  Whenever you update your Prisma schema, you will have to update your database schema using either `prisma migrate dev` or `prisma db push`. This will keep your database schema in sync with your Prisma schema. The commands will also regenerate Prisma Client.

[本地开发完成之后，如何更新生产环境数据库？](https://weijunext.com/article/d542b265-131d-4553-9d2d-b0e72a35e8d5)
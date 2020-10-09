# Express, Apollo-Server-Express 2, GraphQL, Sequelize, MySQL, JWT-Auth


NOTE : sequelize -> User.findById IS NOW : User.findByPk

```bash
#dependencies
yarn add apollo-server-express bcrypt body-parser dotenv express express-jwt graphql jsonwebtoken mysql2 sequelize

# Run migrations
sequelize db:migrate

```

## JWT Auth token in playground
```javascript
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGlAbWFpbC5jb20iLCJpYXQiOjE2MDIxOTcyOTksImV4cCI6MTYwMjI4MzY5OX0.somzV3iFZFKt5A4lpzL9sJPJULVtWpmhCdJf0_rzWic"
}
```
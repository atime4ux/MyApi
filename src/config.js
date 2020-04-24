const config = {
  app: {
    name: 'MyApi',
  },
  port: {
    staging: 1369,
    dev: 1369,
  },
  db: {
    staging: {
      host: 'dbaddr',
      port: 1234,
      user: 'username',
      password: 'dbpwd',
      database: 'dbname',
      multipleStatements: true,
    },
    dev: {
      host: 'dbaddr',
      port: 1234,
      user: 'username',
      password: 'dbpwd',
      database: 'dbname',
      multipleStatements: true,
    },
  },
}

export default config

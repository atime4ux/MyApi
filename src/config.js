const config = {
  app: {
    name: 'MyApi',
    home: '/home/opc',
  },
  port: {
    staging: 2468,
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

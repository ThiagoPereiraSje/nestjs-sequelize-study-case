// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'dev_db',
      user: 'postgres',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations/dev',
    },
    seeds: {
      directory: './migrations/dev/seeds',
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations/dev',
    },
    seeds: {
      directory: './migrations/dev/seeds',
    },
  },
};

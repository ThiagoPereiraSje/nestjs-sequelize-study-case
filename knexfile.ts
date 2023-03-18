import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
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
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'test_db',
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
      directory: './migrations/test/seeds',
    },
  },
};

module.exports = config;

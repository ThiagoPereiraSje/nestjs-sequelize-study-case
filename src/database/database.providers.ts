import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const dirname = __dirname.split('/database')[0];

      const db = new Sequelize({
        dialect: process.env.DB_DIALECT as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        models: [`${dirname}/models`],
      });

      return db;
    },
  },
];

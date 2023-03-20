import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const dirname = __dirname.split('/database')[0];

      const db = new Sequelize({
        dialect: process.env.DIALECT as any,
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        models: [`${dirname}/models`],
      });

      return db;
    },
  },
];

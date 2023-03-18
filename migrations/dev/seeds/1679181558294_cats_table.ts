import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('cats').del();

  // Inserts seed entries
  await knex('cats').insert([
    { name: 'tom' },
    { name: 'jerry' },
    { name: 'spike' },
  ]);
}

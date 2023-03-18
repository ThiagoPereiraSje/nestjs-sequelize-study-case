import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cats', function (t) {
    t.increments('id');
    t.string('name', 255);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cats');
}

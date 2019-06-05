exports.up = async knex => {
  await knex.schema.createTable("dishes", tbl => {
    tbl.increments("id");
    tbl
      .string("name")
      .unique()
      .notNullable();
  });

  await knex.schema.createTable("recipes", tbl => {
    tbl.increments("id");
    tbl
      .string("name")
      .unique()
      .notNullable();
    tbl.string("instructions").notNullable();
  });

  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id");
    tbl
      .string("name")
      .unique()
      .notNullable();
  });

  await knex.schema.createTable("dishes_recipes", tbl => {
    tbl.increments("id");
    tbl
      .integer("dishes_id")
      .references("id")
      .inTable("dishes");
    tbl
      .integer("recipes_id")
      .references("id")
      .inTable("recipes");
  });

  await knex.schema.createTable("recipes_ingredients", tbl => {
    tbl.increments("id");
    tbl
      .integer("recipes_id")
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredients_id")
      .references("id")
      .inTable("ingredients");
    tbl.float("quantity").notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("dishes_recipes");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("dishes");
};

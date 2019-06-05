exports.up = function(knex, Promise) {
  return knex.schema
    .hasColumn("recipes_ingredients", "quantity")
    .then(exists => {
      if (!exists) {
        return knex.schema.table("recipes_ingredients", tbl => {
          tbl.float("quantity");
        });
      }
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("recipes_ingredients", tbl => {
    tbl.dropColumn("quantity");
  });
};

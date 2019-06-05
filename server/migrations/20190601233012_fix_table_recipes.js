exports.up = function(knex, Promise) {
  return knex.schema.hasColumn("dish").then(exists => {
    if (!exists) {
      return knex.schema.table("recipes", tbl => {
        tbl
          .integer("dish")
          .references("id")
          .inTable("dishes");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("recipes", tbl => {
    tbl.dropColumn("dish");
  });
};

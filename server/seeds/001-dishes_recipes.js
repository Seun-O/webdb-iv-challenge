exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes_recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes_recipes").insert([
        { id: 1, dishes_id: 1, recipes_id: 1 },
        { id: 2, dishes_id: 2, recipes_id: 2 },
        { id: 3, dishes_id: 3, recipes_id: 3 }
      ]);
    });
};

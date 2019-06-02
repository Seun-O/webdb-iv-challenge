exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { id: 1, recipes_id: 1, ingredients_id: 1, quantity: 1 },
        { id: 2, recipes_id: 1, ingredients_id: 2, quantity: 2 },
        { id: 3, recipes_id: 1, ingredients_id: 3, quantity: 2 },
        { id: 4, recipes_id: 1, ingredients_id: 4, quantity: 2.5 },
        { id: 5, recipes_id: 1, ingredients_id: 5, quantity: 0.5 }
      ]);
    });
};

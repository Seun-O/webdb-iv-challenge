exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "teaspoon of salt" },
        { id: 2, name: "eggs" },
        { id: 3, name: "cup of flour" },
        { id: 4, name: "cup of sugar" },
        { id: 5, name: "cup of butter" }
      ]);
    });
};

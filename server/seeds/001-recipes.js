exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Sugar Cookies", instructions: "Make it this way..." },
        { id: 2, name: "Coffee Cake", instructions: "Or make it like this.." },
        { id: 3, name: "Fried Rice", instructions: "Make it another way..." }
      ]);
    });
};

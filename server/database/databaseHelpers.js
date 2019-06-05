const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./database/dev.sqlite3"
  },
  useNullAsDefault: true
};

const db = knex(config);

const getDish = id => {
  if (id) {
    return db("dishes as d")
      .leftJoin("recipes as r", "d.id", "r.dish")
      .where({ "r.dish": id })
      .select("r.id", "d.name as Dish", "r.name as Recipe");
  }
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getRecipes = () => {
  return db("recipes as r")
    .join("dishes as d", "r.dish", "d.id")
    .select("r.id", "r.name as Recipe", "d.name as Dish");
};

const addRecipes = (rec, ins, dis) => {
  return db("recipes").insert(rec, ins, dis);
};

// Function to Test knex methods with database
// async function execute() {
//   try {
//     const dishes = await getRecipes();
//     console.log(dishes);
//   } catch (err) {
//     console.log(err);
//   }
// }
// execute()

module.exports = {
  getDish,
  addDish,
  getRecipes,
  addRecipes
};

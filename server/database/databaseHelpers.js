const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./database/dev.sqlite3"
  },
  useNullAsDefault: true
};

const db = knex(config);

const getDishes = id => {
  if (id) {
    return db("dishes")
      .first()
      .where({ id });
  }
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getRecipes = () => {
  return db("dishes_recipes");
};

async function execute() {
  try {
    // const dishes = await addDish({ name: "Eggs" });
    const dishes = await getRecipes();
    console.log(dishes);
  } catch (err) {
    console.log(err);
  }
}

execute();

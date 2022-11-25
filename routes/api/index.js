// import all of the API routes to predix their endpoint names & package them up

const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");

// add prefix of '/pizzas' to routes created in 'pizza-routes.js' file
router.use("/pizzas", pizzaRoutes);

module.exports = router;

const router = require("express").Router();
// import all of the API routes from /api/index.js (no need for index.js tho since it is implied)
const apiRoutes = require("./api");
const htmlRoutes = require("./html/html-routes");

// add prefix of '/api' to all of the API routes imported from the 'api' folder
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;

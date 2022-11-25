const { Pizza } = require("../models");
const { db } = require("../models/Pizza");

const pizzaController = {
  // the functions will go in here as methods

  // method for finding all pizza data
  // getAllPizza will be callback function for the GET /api/pizzas route
  getAllPizza(req, res) {
    Pizza.find({})
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one pizza by id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .then((dbPizzaData) => {
        //if no pizza is found, send 404
        if (!dbPizzaData) {
          res.status(400).json({ message: "No pizza found with this id" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // method for handling POST /api/pizzas
  // createPizza --> add a pizza to the database
  createPizza({ body }, res) {
    Pizza.create(body)
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => res.status(400).json(err));
  },

  // method for updating a pizza by id when we make a request to PUT /api/pizzas/:id
  // .findOneAndUpdate() - mongoose finds a single doc we want to update & then updates it and returns to the updated doc
  // if we don't set the 3rd param {new:true}, it will return to the OG doc
  // set param to true so it instructs mongoose to return the new version of the doc
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(400).json({ message: "No pizza found with this id" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // method to delete a pizza by id from the database when we make a request to DELETE /api/pizzas/:id
  // .findOneAndDelete will find the document to be returned & also delete it from the DB
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = pizzaController;

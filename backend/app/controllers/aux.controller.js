const db = require("../models");
const Aux = db.aux;

exports.getAuxs = async (req, res) => {
  const auxs = await Aux.find({});
  res.send(auxs);
};
exports.postAux = async (req, res) => {
  const auxs = await Aux.insertMany([req.body]);
  res.send({ message: "creado correctamente" });
};

const mongoose = require("mongoose");

const AuxSchema = new mongoose.Schema({}, { strict: false });
const Aux = mongoose.model("aux", AuxSchema);

module.exports = Aux;

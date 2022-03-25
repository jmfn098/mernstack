const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.aux = require("./aux.model");
module.exports = db;

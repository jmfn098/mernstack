const auxController = require("../controllers/aux.controller");

module.exports = (app) => {
  app.get("/api/auxs", auxController.getAuxs);
  app.post("/api/auxs/aux", auxController.postAux);
};

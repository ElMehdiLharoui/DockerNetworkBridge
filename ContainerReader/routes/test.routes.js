const router = require("express").Router();
const testController = require("../Controller/test.controller");
module.exports = (app) => {
    router.get("/", testController.getAll);
  
    app.use("/test", router);
};

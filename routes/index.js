var router = require("express").Router();
var apiRoutes = require("./api/actionDisp");

router.use("/api", apiRoutes);

module.exports = router;
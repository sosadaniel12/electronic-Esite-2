const router = require("express").Router();
<<<<<<< HEAD
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
=======

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8

module.exports = router;

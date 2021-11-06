const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

<<<<<<< HEAD
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

router.get("/", async (req, res) => {
  res.render("homepage", { test: "test" });
=======
router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
>>>>>>> 9cc1c87d7ad3ee0e78285f6c4cf7e3bf0c5ebfe8
});

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;

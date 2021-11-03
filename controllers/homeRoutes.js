const router = require("express").Router();
const { User } = require("../models");
<<<<<<< HEAD

router.get("/", async (req, res) => {
  try {
    // Get all users, sorted by name
=======
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

<<<<<<< HEAD
    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render("homepage", { users });
=======
    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
  } catch (err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
=======
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
module.exports = router;

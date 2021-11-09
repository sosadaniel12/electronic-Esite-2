const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const Electronics = require("../models/electronics");

router.get("/", withAuth, async (req, res) => {
  try {
    const allElectronics = await Electronics.findAll();
    const plainElectronics = allElectronics.map((electronic) =>
      electronic.get({
        plain: true,
      })
    );
    console.log(plainElectronics);
    res.render("homepage", {
      logged_in: req.session.logged_in,
      plainElectronics,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
router.get("/shop", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("shop");
});
module.exports = router;

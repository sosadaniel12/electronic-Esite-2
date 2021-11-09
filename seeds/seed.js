const sequelize = require("../config/connection");
const electronicsdata = require("./electronic_seeds.json");
const Electronics = require("../models/electronics");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Electronics.bulkCreate(electronicsdata);

  process.exit(0);
};

seedAll();

module.exports = seedAll;

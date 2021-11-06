const sequelize = require("../config/connection");
const electronicsdata = require("./electronic_seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await electronicsdata();

  process.exit(0);
};

seedAll();

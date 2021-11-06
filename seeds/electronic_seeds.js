const {Electronics} = require("../models");

const electronicsdata = [
  {
    title:
      "Lenovo Chromebook 3 14” Touch Laptop - Mediatek MT8183 - 4GB Memory - 64GB eMMC - Arctic Grey",
    filename: "lenovo_chromebook.jpg",
    price: "$149.00",
  },
  {
    title:
      "Dell - Inspiron 7000 2-in-1 14” Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Blue",
    filename: "dell_laptop.jpg",
    price: "$599.00",
  },
  {
    title:
      "HP - ENVY 2-in-1 15.6” Touch-Screen Laptop - AMD Ryzen 7 - 8GB Memory - 512GB SSD - Nightfall Black",
    filename: "hp_laptop.jpg",
    price: "$839.99",
  },
  {
    title:
      "Samsung - Odyssey Gaming CRG5 Series 27” LED Curved FHD G-Sync Monitor - Dark Blue/Gray",
    filename: "samsung_monitor.jpg",
    price: "$249.99",
  },
  {
    title:
      "Dell - S2721HGF 27” Gaming - LED Curved FHD FreeSync and G-SYNC Compatible Monitor (DisplayPort, HDMI) - Black",
    filename: "dell_monitor.webp",
    price: "$219.99",
  },
  {
    title: "WD - easystore 14TB External USB 3.0 Hard Drive - Black",
    filename: "wd.webp",
    price: "$199.99",
  },
  {
    title: "SanDisk - Ultra 256GB USB 3.0 Type A Flash Drive - Black",
    filename: "flashdrive.jpg",
    price: "$24.99",
  },
];

const seedElectronics = () => Electronics.bulkCreate(electronicsdata);

module.exports = seedElectronics;

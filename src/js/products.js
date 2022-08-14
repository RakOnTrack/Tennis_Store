/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Babolat Pure Strike",
    description: "Provides Most Feel from BABOLAT line",
    price: 39999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1434626982825-b030fb94f5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P2",
    title: "Babolat Aero Rafa",
    description: "Provides Most Power from BABOLAT line",
    price: 31999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P3",
    title: "Babolat Pure Drive",
    description: "Provides Most Control from BABOLAT line",
    price: 29999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1530915365347-e35b749a0381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P4",
    title: "Head speedMP",
    description: "Provides Most speed from HEAD line",
    price: 29999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1559389768-76aa70aa515d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P5",
    title: "Tecnifiber Tight 300 RS",
    description: "Provides Most Power from Tecnifiber line",
    price: 29699,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1599586120162-c282f39edd1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P6",
    title: "Wilson Pro Staff 97",
    description: "Provides Most speed from Wilson line",
    price: 29999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1599146467253-e574ee5cb852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P7",
    title: "Wilson Blade",
    description: "Provides Most speed from Wilson line",
    price: 27999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1581079513795-29d2cc7dfd6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: "P1",
    title: "Dunlap FX 500",
    description: "Provides Most speed from Dunlap line",
    price: 26999,
    discontinued: false,
    categories: ["c1"],
    photo:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P8",
    title: "Nike React Vapor NXT",
    description: "Provides Most comfort from Nike line",
    price: 21999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P9",
    title: "Nike Court Zoom NXT",
    description: "Provides Most quickness from Nike line",
    price: 17999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P10",
    title: "Nike Zoom Vapor Cage 4 Rafa",
    description: "Provides Most speed from Nike line",
    price: 18999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P11",
    title: "Nike Air Zoom Vapor Pro ",
    description: "Provides Most agility from Nike line",
    price: 15999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P12",
    title: "Adidas Barricade",
    description: "Provides Most Power from Adidas line",
    price: 17999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1563315657-fe24a7764781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFkaWRhcyUyMHRlbm5pcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=750&q=60"
  },

  {
    id: "P13",
    title: "adidas Adizero Ubersonic",
    description: "Provides Most control from adidas line",
    price: 16999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P14",
    title: "Asics Solution Speed FF ",
    description: "Provides Most speed from Asics line",
    price: 15999,
    discontinued: true,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P15",
    title: "ASICS Gel-Resolution",
    description: "Provides Most control from ASICS line",
    price: 17999,
    discontinued: false,
    categories: ["c2"],
    photo:
      "https://images.unsplash.com/photo-1591222018978-ed27e9ee3f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P16",
    title: "Wilson US Open Extra Duty Tennis Balls",
    description: "Provides Most speed from Wilson line",
    price: 799,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1589550458041-48caacbe4367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P17",
    title: "Wilson Triniti Tennis Balls - 3 Ball Sleeve",
    description: "Provides Most  from Wilson line",
    price: 799,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1619891418559-17ac45dc2b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P18",
    title: "Pro Penn Marathon Extra Duty Tennis Balls",
    description: "Provides Most durabiltiy from Pro line",
    price: 599,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1595555785647-53441687d78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P19",
    title: "Penn Tour Extra Duty Tennis Balls",
    description: "Provides Most speed from Penn line",
    price: 799,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1601646761285-65bfa67cd7a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P20",
    title: "Dunlop ATP Extra Duty Tennis Balls",
    description: "Provides Most speed from Dunlop line",
    price: 799,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1602211844066-d3bb556e983b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P21",
    title: "Dunlop Australian Open Extra Duty Tennis Balls",
    description: "Provides Most speed from Dunlop line",
    price: 599,
    discontinued: false,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  },

  {
    id: "P22",
    title: "Pro Penn Marathon Regular Duty Tennis Balls",
    description: "Provides Most power from Pro line",
    price: 599,
    discontinued: true,
    categories: ["c3"],
    photo:
      "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
  }
];

const ItemShop = [
  {
    name: "Paris loafer",
    price: 5200.78,
    pic: "https://assets.hermes.com/is/image/hermesproduct/paris-loafer--231939ZA79-worn-1-0-0-800-800_g.jpg",
    desc: "Loafer in patinated goatskin with signature 'H' detail. For a chic look.",
  },
  {
    name: "Oz Mule",
    price: 5500.25,
    pic: "https://assets.hermes.com/is/image/hermesproduct/oz-mule--212295Z%2001-worn-1-0-0-800-800_g.jpg",
    desc: "Mule in goatskin with iconic palladium plated Kelly buckle. For everyday elegance.",
  },
  {
    name: "Giulia Sandal",
    price: 3230.89,
    pic: "https://assets.hermes.com/is/image/hermesproduct/giulia-sandal--232130Z%20VE-front-wm-1-0-0-800-800_g.jpg",
    desc: "Sandal in suede goatskin and calfskin with iconic palladium-plated Kelly buckle. A sleek design for a chic feminine look.",
  },
  {
    name: "Deep Sneaker",
    price: 3850.25,
    pic: "https://assets.hermes.com/is/image/hermesproduct/deep-sneaker--222905ZHG0-worn-1-0-0-800-800_g.jpg",
    desc: "Sneaker in ribbed suede fabric and suede goatskin. A sleek graphic design for a neo-vintage urban look.",
  },
  {
    name: "Freestyle Sneaker",
    price: 5600.89,
    pic: "https://assets.hermes.com/is/image/hermesproduct/freestyle-sneaker--222920ZH90-worn-1-0-0-800-800_g.jpg",
    desc: "High-top sneaker in Epsom calfskin and calfskin. A sole enhanced with a 'Clou de selle' motif, for a modern and urban look.",
  },
];

export default ItemShop;

// CREATE TABLE items (
//   ID SERIAL PRIMARY KEY,
//   name VARCHAR (30),
//   price money,
//   pic VARCHAR (255),
//   description VARCHAR (255),
//   );

// INSERT INTO items(name, price, pic, description)
// VALUES ('London loafer', 5200.78, 'https://assets.hermes.com/is/image/hermesproduct/paris-loafer--231939ZA79-worn-1-0-0-800-800_g.jpg', 'Loafer in patinated goatskin with signature.')
// RETURNING *;

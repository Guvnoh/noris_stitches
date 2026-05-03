export type Outfit = {
  type: string;
  image: string;
  price: number;
  tag: string;
  size: string;
};
const outfits: Outfit[] = [
  {
    type: "Bubu",
    image: "images/sitting1.jpg",
    price: 29.99,
    tag: "Sold-out",
    size: "medium",
  },
  {
    type: "Tops",
    image: "images/sitting2.jpg",
    price: 39.99,
    tag: "new",
    size: "large",
  },
  {
    type: "Trousers",
    image: "images/sitting3.jpg",
    price: 49.99,
    tag: "Coming soon",
    size: "large",
  },
  {
    type: "Skirts",
    image: "images/standing1.jpg",
    price: 59.99,
    tag: "New",
    size: "large",
  },
  {
    type: "Dresses",
    image: "images/standing2.jpg",
    price: 69.99,
    tag: "New",
    size: "large",
  },
];
export default outfits;

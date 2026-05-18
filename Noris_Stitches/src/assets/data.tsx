export type Sizes = {
  sm: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export type Outfit = {
  _id: string;
  category: string;
  imageUrl: string;
  price: number;
  tag: string;
  sizes: Sizes;
  name: string;
};

const outfits: Outfit[] = [
  {
    _id: "local-1",
    category: "Bubu",
    imageUrl: "/src/assets/Bubu/31ff347c55e2853964c9830c116b4423.jpg",
    price: 18000,
    tag: "In-Stock",
    sizes: { sm: "5", m: "5", l: "5", xl: "5", xxl: "5" },
    name: "Loading...",
  },
  {
    _id: "local-2",
    category: "Dresses",
    imageUrl: "/src/assets/Bubu/36ab74d10a06548339944710d0de3552.jpg",
    price: 18500,
    tag: "In Stock",
    sizes: { sm: "3", m: "3", l: "0", xl: "0", xxl: "0" },
    name: "Kaftan Bubu",
  },
  {
    _id: "local-3",
    category: "Pallazzo",
    imageUrl: "/src/assets/Bubu/2033d61711671284c0e403eed911c960.jpg",
    price: 18500,
    tag: "In Stock",
    sizes: { sm: "2", m: "4", l: "4", xl: "2", xxl: "1" },
    name: "Blue Water",
  },
];

export { outfits };

This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/images/sitting2.jpg
README.md
server/.env
server/package.json
server/src/index.ts
server/src/models/.env
server/src/models/Products.ts
server/src/routes/productRoutes.ts
server/tsconfig.json
src/assets/Ankara_dress/0372af158f4d30ba2e232603a6e6db78.jpg
src/assets/Ankara_dress/07c6e42726374106b7d74448083e30c9.webp.jpg
src/assets/Ankara_dress/0a484b1adecfe50499f0835ae4e08199.jpg
src/assets/Ankara_dress/117288d9c068dd37b55651d1daff2ea6.jpg
src/assets/Ankara_dress/1eb6f14fe19e3573b8ee1c8c2df6c751.jpg
src/assets/Ankara_dress/22b54783a5e569821a4aea91c6aac32e.jpg
src/assets/Ankara_dress/3338f138024329fdc79f044986cad69c.jpg
src/assets/Ankara_dress/3c7d7d5a38d4c45df991aa05968a7531.jpg
src/assets/Ankara_dress/4e6c2fe74af595eaf3da3a71f0638b30.jpg
src/assets/Ankara_dress/515d12046a9f8430ff6da34d8281dd98.jpg
src/assets/Ankara_dress/5195ad1b94d58c5b20d2b74f31fe0416.jpg
src/assets/Ankara_dress/766c98092b10540cc990806362e91b0f.jpg
src/assets/Ankara_dress/7727856368b86f4c61cd7731b98cad6c.jpg
src/assets/Ankara_dress/7c95437f61266392d60e6d73d5a1e631.webp.jpg
src/assets/Ankara_dress/a303024a884a5d5edbfac24a62916994.jpg
src/assets/Ankara_dress/b964131911cfc4505c4724e592e9688c.jpg
src/assets/Ankara_dress/bcb6b718c2c4b209b3ab0ad560a8b194.webp.jpg
src/assets/Ankara_dress/cc4fc95975155183fd22f8b37348a215.jpg
src/assets/Ankara_dress/cd158816adf7d4b18162878567e7e206.jpg
src/assets/Ankara_dress/d297f5bb1ab008aed0089014ee01c786.webp.jpg
src/assets/Ankara_dress/dbb324dfea860ce77d17ddde626a7b16.jpg
src/assets/Ankara_dress/df7a058584fdabd5c355b169d0b49c9f.jpg
src/assets/Ankara_dress/e04514d0ac13e2be1d3162163c155ace.jpg
src/assets/Ankara_dress/e7eead7a728b5f0f396769ff01682b11.jpg
src/assets/Ankara_dress/e8fcc63834e725c9250aad915d7ec39a.jpg
src/assets/Ankara_dress/fc76f91697d3de6b192fff408893da2a.jpg
src/assets/Ankara_dress/fd7f97ea4b44e81690d0148977850d56.jpg
src/assets/Ankara_dress/fed6c4a3505532799b6e681382dd5f08.jpg
src/assets/Bubu/2033d61711671284c0e403eed911c960.jpg
src/assets/Bubu/31ff347c55e2853964c9830c116b4423.jpg
src/assets/Bubu/3308881c764e78519b78151d3e632746.webp.jpg
src/assets/Bubu/36ab74d10a06548339944710d0de3552.jpg
src/assets/Bubu/4051829a73bf37c70b0b87ea5b58e10c.jpg
src/assets/Bubu/49ca401434b36bcf508e36b991277d27.jpg
src/assets/Bubu/4afb7a8349014902aa009c381f9ddd07.jpg
src/assets/Bubu/4ee5febaf61afb20981be84716885ec4.jpg
src/assets/Bubu/6dc5daa41a198ee794dfde3d2fba44c5.jpg
src/assets/Bubu/7a731b2bb743067a95edd481423bdc7b.jpg
src/assets/Bubu/7fa00287491ce0b11b7d8b5d31376892.jpg
src/assets/Bubu/8995d171d94b12c6604a0e5d079f8e8b.jpg
src/assets/Bubu/8df88aaa05cd3355fe57cfdb1bdabdf2.webp.jpg
src/assets/Bubu/9cf3d829b3aee9b54542d47ee87c8481.jpg
src/assets/Bubu/a30e6bd22134e621b76409917e333c73.jpg
src/assets/Bubu/a634bf526ca04f9d1c371a2143f92e28.jpg
src/assets/Bubu/b967b88b530cd57a07c6f90786bd7781.jpg
src/assets/Bubu/ba288421f2f3703cb6c86219bef80db0.jpg
src/assets/Bubu/c1ed52bff3449e017e941bbdc1664ca3.jpg
src/assets/Bubu/c576ef3df40033fa4eda923d583f271d.jpg
src/assets/Bubu/c73c113d80c33eaba273dfe1f1f5ccd7.jpg
src/assets/Bubu/cb9371ce8c9ffb9474c80aeaa0c40914.jpg
src/assets/Bubu/cc05c4953a325d4ba09a87d68e426e47.jpg
src/assets/Bubu/df64346b31fc63f456f3350b0b11cfee.jpg
src/assets/Bubu/e9de5d22b9f5373721d2aeb08605b3e6.jpg
src/assets/Bubu/fdafcc11877473c8e54b52997179d1ac.jpg
src/assets/Bubu/IMG-20260426-WA0001.jpg
src/assets/Bubu/sapphire-green.jpg
src/assets/data.tsx
src/assets/Pallazzo/123f5687b4e41024a58cb18ff1e00a63.jpg
src/assets/Pallazzo/5ee74fe9e90a193c24bc8f34063bf121.jpg
src/assets/Pallazzo/ac87ffa78d5c587bf1f51c4e0a5f8be1.jpg
src/assets/Pallazzo/d51fb1943675fc87535acb41ea81e244.jpg
src/assets/Pallazzo/e946db565fd455e1c064c89a90b0a4af.jpg
src/assets/Pallazzo/ed6841e7a57a93b4ace6974e60c46432.jpg
src/assets/Pallazzo/f082edb93d101672dc7fa91a2fd87ed0.webp.jpg
src/components/App.tsx
src/components/Banner.tsx
src/components/Catalogue.tsx
src/components/declarations.d.ts
src/components/Header.tsx
src/components/ProductsDisplay.tsx
src/components/sortComponent.tsx
src/index.css
src/main.tsx
src/tools/db_interface.ts
src/tools/formatters.tsx
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>nori-s-stitches</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "nori-s-stitches",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.16.1",
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "@babel/core": "^7.29.0",
    "@eslint/js": "^9.39.4",
    "@rolldown/plugin-babel": "^0.2.3",
    "@tailwindcss/postcss": "^4.2.4",
    "@types/babel__core": "^7.20.5",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "postcss": "^8.5.10",
    "tailwindcss": "^4.2.4",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.9"
  }
}
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
````

## File: server/.env
````
MONGO_URI=mongodb://localhost:27017
PORT=5000
````

## File: server/package.json
````json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "mongoose": "^9.6.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/node": "^25.7.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^6.0.3"
  }
}
````

## File: server/src/index.ts
````typescript
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Products";
import router from "./routes/productRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", router);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string, { dbName: "products" })
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/products", async (req, res) => {
  console.log("get worked");
  const products = await Product.find();
  res.json(products);
});

app.get("/debug", async (req, res) => {
  const all = await mongoose.connection.db
    .collection("dresses")
    .find()
    .toArray();

  res.json(all);
});

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error saving product: " + error });
  }
});
````

## File: server/src/models/.env
````
MONGO_URI=mongodb://localhost:27017/products
PORT=5000
````

## File: server/src/models/Products.ts
````typescript
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
  },
});

export default mongoose.model("Dress", productSchema);
````

## File: server/src/routes/productRoutes.ts
````typescript
import express from "express";
import Product from "../models/Products";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
````

## File: server/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",

    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true,

    "ignoreDeprecations": "6.0"
  },

  "include": ["src"]
}
````

## File: src/assets/data.tsx
````typescript
export type Outfit = {
  id: number;
  category: string;
  imageUrl: string;
  price: number;
  tag: string;
  size: string;
  name: string;
};
// const bubuObjects = Object.values(
//   import.meta.glob("/src/assets/Bubu/*.{png,jpg,webp,jpeg,gif}", {
//     eager: true,
//     as: "url",
//   }),
// );
// const bubus: string[] = Object.values(bubuObjects);

const outfits: Outfit[] = [
  {
    id: 1,
    category: "Bubu",
    imageUrl: "/src/assets/Bubu/31ff347c55e2853964c9830c116b4423.jpg",
    price: 18000,
    tag: "In-Stock",
    size: "all",
    name: "Loading...",
  },
  {
    id: 2,
    category: "Dresses",
    imageUrl: "/src/assets/Bubu/36ab74d10a06548339944710d0de3552.jpg",
    price: 18500,
    tag: "In Stock",
    size: "large",
    name: "Kaftan bubu",
  },
  {
    id: 3,
    category: "Pallazzo",
    imageUrl: "/src/assets/Bubu/2033d61711671284c0e403eed911c960.jpg",
    price: 18500,
    tag: "In Stock",
    size: "large",
    name: "Blue Water",
  },
  // {
  //   id: 4,
  //   category: "Bubu",
  //   image: "/src/assets/Bubu/4051829a73bf37c70b0b87ea5b58e10c.jpg",
  //   price: 18500,
  //   tag: "In Stock",
  //   size: "large",
  //   name: "Blue Water",
  // },
];
export { outfits };
````

## File: src/components/App.tsx
````typescript
import Header from "./Header";
import Banner from "./Banner";
import Catalogue from "./Catalogue";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Banner />
      </div>
      <Catalogue />
    </div>
  );
}

export default App;
````

## File: src/components/Banner.tsx
````typescript
export default function Banner() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/sitting2.jpg"
          alt="African fashion"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h2 className="text-4xl md:text-6xl font-heading leading-tight">
          Elegance Woven Into Every Thread
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Modern Nigerian fashion, rooted in culture and crafted for confidence.
        </p>

        <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold tracking-wide hover:bg-yellow-300 transition rounded-sm">
          Explore Collection
        </button>
      </div>
    </section>
  );
}
````

## File: src/components/Catalogue.tsx
````typescript
import { outfits, type Outfit } from "../assets/data";
import { useState } from "react";
import { formatNumber } from "../tools/formatters";
import { getProducts } from "../tools/db_interface";
import { useEffect } from "react";
import { SortSelect } from "./sortComponent";

export default function Catalogue() {
  const [products, setProducts] = useState<Outfit[]>([]);
  const [selectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      if (data) setProducts(data);
    };
    loadProducts();
  }, []);
  const filteredBase =
    selectedCategory === "All"
      ? products.length
        ? products
        : outfits
      : products.length
        ? products.filter((o) => o.category === selectedCategory)
        : outfits.filter((o) => o.category === selectedCategory);

  const filtered = [...filteredBase].sort((a, b) => {
    switch (sortOption) {
      case "low-high":
        return a.price - b.price;

      case "high-low":
        return b.price - a.price;

      case "a-z":
        return a.name.localeCompare(b.name);

      case "z-a":
        return b.name.localeCompare(a.name);

      default:
        return 0;
    }
  });
  return (
    <section
      id="catalogue"
      style={{
        background: "#F7F2EA",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      {/* Section header */}
      <div className="text-center mb-16 px-6">
        <p
          className="text-xs tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)", color: "#B55934" }}
        >
          Handcrafted for You
        </p>
        <h2
          className="font-bold leading-none mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            color: "#0D0B09",
            fontWeight: 700,
          }}
        >
          The Collection
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4">
          <div
            style={{ height: "1px", width: "56px", background: "#C9A84C" }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              transform: "rotate(45deg)",
              background: "#C9A84C",
            }}
          />
          <div
            style={{ height: "1px", width: "56px", background: "#C9A84C" }}
          />
        </div>
      </div>
      <span>
        <SortSelect
          option={{
            value: sortOption,
            onChange: setSortOption,
          }}
        />
      </span>
      {/* Catalogue grid */}
      <div
        className="catalogue-grid mx-auto px-4 md:px-10"
        style={{
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {/* ------Cards Map------ */}

        {filtered.map((outfit, i) => (
          <OutfitCard
            outfit={outfit}
            key={i}
            index={i}
            // handleClick= {() => handleClick(outfit.image)}
            // {() => console.log(outfit.image)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p
          className="text-sm mb-6"
          style={{ fontFamily: "var(--font-body)", color: "rgba(13,11,9,0.4)" }}
        >
          All pieces made to order · 7–14 day delivery
        </p>
        <a
          href="mailto:hello@norisstitches.com"
          className="inline-block text-xs tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300"
          style={{
            fontFamily: "var(--font-body)",
            border: "1px solid #0D0B09",
            color: "#0D0B09",
            textDecoration: "none",
            letterSpacing: "0.25em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#0D0B09";
            (e.currentTarget as HTMLElement).style.color = "#F2EAD9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#0D0B09";
          }}
        >
          Enquire & Order
        </a>
      </div>
    </section>
  );
}
const handleClick = (url: string) => console.log(url);
function OutfitCard({ outfit, index }: { outfit: Outfit; index: number }) {
  const isFeature = index === 3; // 4th card gets a special treatment
  return (
    <div
      className="outfit-card group relative overflow-hidden cursor-pointer"
      style={{
        aspectRatio: isFeature ? "4 / 6" : "4 / 5",
        background: "#1A1410",
        gridRow: isFeature ? "span 1" : undefined,
      }}
      onClick={() => handleClick(outfit.imageUrl)}
    >
      {/* Product image */}
      <img
        src={outfit.imageUrl}
        alt={""}
        className="card-img w-full h-full object-cover"
        style={{ display: "block" }}
      />

      {/* Hover shimmer top edge */}
      <div
        className="card-shimmer absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Tag badge */}
      {outfit.imageUrl && (
        <div
          className="absolute top-4 left-4"
          style={{
            background: "#C9A84C",
            color: "#0D0B09",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "4px 10px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
          }}
        >
          {outfit.tag}
        </div>
      )}

      {/* Slide-up overlay */}
      <div
        className="card-overlay absolute inset-x-0 bottom-0 flex flex-col justify-end"
        style={{
          padding: "28px 20px 22px",
          background:
            "linear-gradient(to top, rgba(13,11,9,0.95) 0%, rgba(13,11,9,0.7) 60%, transparent 100%)",
          minHeight: "45%",
        }}
      >
        <p
          className="font-bold leading-none mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.65rem",
            color: "#F2EAD9",
            fontStyle: "italic",
          }}
        >
          {outfit.name}
        </p>
        <div className="flex items-center justify-between">
          <p
            className="font-bold"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "#C9A84C",
              letterSpacing: "0.05em",
            }}
          >
            ₦{formatNumber(outfit.price)}
          </p>
          <div
            className="flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242,234,217,0.55)",
              fontSize: "0.6rem",
            }}
          >
            View
            <span style={{ fontSize: "0.75rem" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/components/declarations.d.ts
````typescript
declare module "*.css";
````

## File: src/components/Header.tsx
````typescript
// // import "./header.css";
// import "../index.css";
// export default function Header() {
//   return (
//     <header id="header">
//       <nav className="font-body shadow  m-b-5">
//         <ul className=" w-full h-50 mx-auto flex flex-row p-2  font-mono">
//           {/* hamburger menu icon */}
//           <button className="flex flex-col space-y-2 mt-2 mr-8 md:hidden">
//             <span className="block w-9 h-1  bg-white"></span>
//             <span className="block w-9 h-1 bg-white "></span>
//             <span className="block w-9 h-1 bg-white "></span>
//           </button>

//           {/* Logo */}
//           <h1 className="font-bold h-min font-heading text-yellow-100 text-4xl">
//             Nori's
//             <span className="ml-5  underline decoration-dashed decoration-4 text-4xl">
//               Stitches
//             </span>
//           </h1>

//           {/* Top menu items */}
//           <div className="justify-between ml-auto flex flex-row px-6 font-bold text-2xl underline">
//             <a href="#catalogue" className="mx-3">
//               Catalogue
//             </a>
//             <a href="#about" className="mx-3 ">
//               About
//             </a>
//           </div>
//         </ul>
//       </nav>
//     </header>
//   );
// }

import "../index.css";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 font-body">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-heading tracking-wide text-white">
          Nori’s <span className="text-yellow-400">Stitches</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-wider text-gray-200">
          <a href="#catalogue" className="hover:text-yellow-400 transition">
            Catalogue
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden flex flex-col space-y-1">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </nav>
    </header>
  );
}
````

## File: src/components/ProductsDisplay.tsx
````typescript
import { type Outfit } from "../assets/data";
export default function ProductsDisplay({ type }: { type: Outfit }) {
  return (
    <>
      <h2>Products</h2>
      <p>Here are our available products:</p>
    </>
  );
}
````

## File: src/components/sortComponent.tsx
````typescript
// export default function SortComponent({
//   option,
//   onOptionChange,
// }: {
//   option: string;
//   onOptionChange: (option: string) => void;
// }) {
//   return (
//     <>
//       <div
//         className="flex justify-end px-4 md:px-10 mb-6"
//         style={{ maxWidth: "1400px", margin: "0 auto" }}
//       >
//         <select
//           value={option}
//           onChange={(e) => onOptionChange(e.target.value)}
//           style={{
//             padding: "10px 14px",
//             border: "1px solid #C9A84C",
//             background: "#F7F2EA",
//             color: "#0D0B09",
//             fontFamily: "var(--font-body)",
//             fontSize: "0.9rem",
//             outline: "none",
//             cursor: "pointer",
//           }}
//         >
//           <option value="default">Sort By</option>
//           <option value="low-high">Price: Low to High</option>
//           <option value="high-low">Price: High to Low</option>
//           <option value="a-z">Name: A-Z</option>
//           <option value="z-a">Name: Z-A</option>
//         </select>
//       </div>
//     </>
//   );
// }
export type SortSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ option }: { option: SortSelectProps }) {
  return (
    <div
      className="flex justify-end px-4 md:px-10 mb-6"
      style={{ maxWidth: "1400px", margin: "0 auto" }}
    >
      <select
        value={option.value}
        onChange={(e) => {
          option.onChange(e.target.value);
        }}
        style={{
          padding: "10px 14px",
          border: "1px solid #C9A84C",
          background: "#F7F2EA",
          color: "#0D0B09",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <option value="default">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="a-z">Name: A-Z</option>
        <option value="z-a">Name: Z-A</option>
      </select>
    </div>
  );
}
export { SortSelect };
````

## File: src/index.css
````css
@import "tailwindcss";

@theme {
  --font-body: "Montserrat", sans-serif;
  --font-heading: "Playfair Display", serif;
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
````

## File: src/tools/db_interface.ts
````typescript
import axios from "axios";
import { type Outfit } from "../assets/data";

const getProducts = async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data as Outfit[];
};
export { getProducts };
````

## File: src/tools/formatters.tsx
````typescript
export default function formatNumber(number: number) {
  return new Intl.NumberFormat("en-US").format(number);
}

export { formatNumber };
````

## File: tailwind.config.js
````javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
````

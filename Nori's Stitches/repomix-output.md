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
public/images/sitting1.jpg
public/images/sitting2.jpg
public/images/sitting3.jpg
public/images/standing1.jpg
public/images/standing2.jpg
public/images/stitching-needle.jpg
README.md
src/assets/data.tsx
src/components/App.tsx
src/components/Banner.tsx
src/components/Catalogue.tsx
src/components/declarations.d.ts
src/components/Header.tsx
src/index.css
src/main.tsx
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

## File: src/assets/data.tsx
````typescript
export type Outfit = {
  name: string;
  image: string;
  price: number;
};
const outfits: Outfit[] = [
  {
    name: "sitting1",
    image: "images/sitting1.jpg",
    price: 29.99,
  },
  {
    name: "sitting2",
    image: "images/sitting2.jpg",
    price: 39.99,
  },
  {
    name: "sitting3",
    image: "images/sitting3.jpg",
    price: 49.99,
  },
  {
    name: "standing1",
    image: "images/standing1.jpg",
    price: 59.99,
  },
  {
    name: "standing2",
    image: "images/standing2.jpg",
    price: 69.99,
  },
];
export default outfits;
````

## File: src/components/App.tsx
````typescript
import Header from "./Header";
import Banner from "./Banner";
import Catalogue from "./Catalogue";

function App() {
  return (
    <div className="App">
      <div className="bg-[url('/images/sitting2.jpg')] bg-cover bg-[center_20%]">
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
// import "./banner.css";
export default function Banner() {
  type Styling = {
    elementName: string;
    classList: string[];
  };
  const styles: Styling[] = [
    {
      elementName: "Banner",
      classList: ["font-body", "@container"],
    },
  ];
  const x = styles.find((x) => x.elementName == "Banner");
  return (
    <>
      <section className={x?.classList.join(" ")}>
        <div className="h-90 flex  flex-col justify-center items-center text-pink-800">
          <h3 className="font-bold text-4xl ">
            Stylish, profesional and beautiful Nigerian women's outfits.
          </h3>
          <p className=" font-bold text-2xl mt-5">Own your heritage!</p>
        </div>
      </section>
    </>
  );
}
````

## File: src/components/Catalogue.tsx
````typescript
import outfits, { type Outfit } from "../assets/data";
// import "./catalogue.css";
export default function Catalogue() {
  return (
    <>
      <section id="catalogue">
        <div className="flex flex-col mt-18 ">
          <p className="text-4xl font-bold ml-8 mb-8 border w-min p-5">
            Catalogue...
          </p>
          <div className=" object-cover grid grid-cols-4 gap-5 p-1 mx-3">
            {outfits.map((outfit) => (
              <OutfitCard data={outfit} key={outfit.name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
function OutfitCard({ data }: { data: Outfit }) {
  return (
    <>
      <div className="aspect-[4/5] hover:border overflow-hidden flex-col min-w-0 max-w-full h-auto hover:rounded-lg transition-transform duration-600 ease-out hover:scale-102">
        {data.name === "bose" ? (
          <video
            src={data.image}
            controls
            className="w-full h-full  object-cover"
          ></video>
        ) : (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover hover:rounded-t-lg "
          />
        )}
        <p className="font-bold text-lg flex-col w-full hover:border-5-pink-500">
          <span className="block w-min mx-auto hover:border hover:rounded-lg">
            {data.name}
          </span>
          <span className="block hover:border hover:rounded-b-lg text-center">
            ₦{data.price}
          </span>
        </p>
      </div>
    </>
  );
}
````

## File: src/components/declarations.d.ts
````typescript
declare module "*.css";
````

## File: src/components/Header.tsx
````typescript
// import "./header.css";
import "../index.css";
export default function Header() {
  return (
    <header id="header">
      <nav className="font-body shadow  m-b-5">
        <ul className=" w-full h-50 mx-auto flex flex-row p-2  font-mono">
          {/* hamburger menu icon */}
          <button className="flex flex-col space-y-2 mt-2 mr-8 md:hidden">
            <span className="block w-9 h-1  bg-white"></span>
            <span className="block w-9 h-1 bg-white "></span>
            <span className="block w-9 h-1 bg-white "></span>
          </button>

          {/* Logo */}
          <h1 className="font-bold h-min font-heading text-yellow-100 text-4xl">
            Nori's
            <span className="ml-5  underline decoration-dashed decoration-4 text-4xl">
              Stitches
            </span>
          </h1>

          {/* Top menu items */}
          <div className="justify-between ml-auto flex flex-row px-6 font-bold text-2xl underline">
            <a href="#catalogue" className="mx-3">
              Catalogue
            </a>
            <a href="#about" className="mx-3 ">
              About
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}
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

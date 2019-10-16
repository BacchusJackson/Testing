# Get the Necessities

## NPM
We're going to assume you already have this. You can update with:
``` bash
npm install -g npm
```
Or if you have nvm installed
``` bash
nvm install 6.12.0
nvm use 6.12.0
```
Of course replace 6.12.0 with the latest version you want

## TypeScript
globally install typescript with npm
``` bash
npm install typescript -g
```
This will get you tsc and tsserver binaries
tsc = TypeScript Project Compiler
tsserver = TypeScript Server (Mostly used by IDEs)

## Nodemon (Optional)
Automatically reloads your project
```bash
npm install -g nodemon
```

# Start a New Project
The tsc is used to compile .ts files to .js files
Most people have a src folder for .ts files and a dist folder for .ts files

Example Structure:
/workspace/Testing
├── dist
|  ├── index.js
|  └── index.js.map
├── src
|  └── index.ts
└── tsconfig.json


To start a new project:
```bash
tsc --init --outDir "dist" --sourceMap true
```
or just
```bash
tsc --init
```
and change the settings in tsconfig.json

# Start Working
You can put your .ts files anywhere you want but most developers keep them contained in src

To compile all .ts files in the directory
```bash
tsc
```
Specific files

```bash
tsc src/index.ts
```
Automatically build files on save
```bash
tsc --watch
```

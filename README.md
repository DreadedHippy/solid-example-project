# Solid JS Example project
Simple e-commerce project made with solid-js and tailwind CSS

## Running the project
### Prerequisites
- You must have [json-server](https://www.npmjs.com/package/json-server) installed globally

### Instructions
- Clone the git repo
- Navigate to the cloned directory
- In the terminal run `npm i` to install all required dependencies
- Run `npm run dev` to start the dev server on http://localhost:3000
- Run `json-server -w -p 4000 ./data/db.json` to run the fake JSON Rest API on port 4000
- Enjoy 💫

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

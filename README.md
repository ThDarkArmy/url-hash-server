# Nodejs url-shortener


This project was generated with [React js](https://reactjs.org/) and [NodeJs](https://nodejs.org) 
This front end project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

use `npm install` in `url-hash-server` dir & `url-hash-client` dir for install libs.

## Run

use `npm start` in `url-hash-server` dir for run nodejs api.
use `npm start` in `url-hash-client` dir for run client side.

- nodejs api run on port `3241`
- react js run on port `3000`

install `mongoDB` and set DB adress for `database` var for `db.js`

## API

api adress after run: `{your_url}:3000/...`

- `/{hash}` - method: `GET` | redirect to original url
- `/create-short-url` - method: `POST` | save url for shorting

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.

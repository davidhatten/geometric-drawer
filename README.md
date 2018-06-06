# geometric-drawer
A little single-page javascript app to generate simple geometries and mandalas

https://davidhatten.github.io/geometric-drawer/

Current version: 1.5.3

## Types of Shapes
* Flower of Life
* Circle
* Square
* Rounded Petals (aka: Quadratic curves)
* Circle Petals
* Curvey Petals (aka: Bezier curves)
* Pointed Petals

## Features
* Define the number of iterations
* Define line width
* Define circle radius
* Center your shapes
* Generate in 8.5"x11"
* Export to PNG
* History of your drawings with deletion

## Coming Soon
More shapes are planned, including shapes to make mandala generation possible!

# Building, Running, and Deploying

## Background
This app uses React-Redux to build a Jekyl-consumable static page that gets sucked up Github Pages and turned into a single-page app.
All of the commands will be run from targets defined in `package.json` using `yarn run`.

## Building Dev
Prereqs:
* Install Node 
* Install NPM
* Install Yarn
* Install Ruby
* Run `yarn install`
* Run `bundle install`

Two commands are required to get your local build running: `dev:wds` and `dev:start`

`dev:wds` starts the webpack dev server, which builds and packs the site into a `bundle.js` that the Jekyll server can use. It hosts this file at `localhost:8080` by default, but if you have something else running there it can bump to port `8081`.

## Running Dev
`dev:start` starts the Jekyll server. Locally, the Jekyll server uses `_config.dev.yml` to figure out where the `bundle.js` content is.

Running these two commands in separate terminals will provide a seamless dev env with hot-reloading of the UI

## Deploying
One file is required in order to update prod. that's the `bundle.js`, but it needs to be the one that GitHub Pages can access.
The `prod:build` command builds the appropriate file. This file must be pushed up. When it is (or when a PR merges it into master), GitHub Pages will recognize it and trigger a new build.

## In Short

### Running Locally
Assuming all library dependencies are installed, run the following commands in separate terminals:

* `yarn run dev:wds`
* `yarn run dev:start`
* Navigate to `localhost:4000`
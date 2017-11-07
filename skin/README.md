Contains the skin files for cloud.gov.au's CloudFoundry console application.

# Development

## Requirements

* yarn (see [installation
  instructions](https://yarnpkg.com/lang/en/docs/install/))

## Set up

### Dependencies

```sh
yarn install
```

### Link to `cg-dashboard`

Assuming the following locations for this repository and `cg-dashboard`:

```
~/go/src/github.com/govau/ci-console
~/go/src/github.com/18f/cg-dashboard
```

Link the skin into both the `static_src` and `static` directories:

```sh
ln -s ~/go/src/github.com/govau/ci-console/skin/ ~/go/src/github.com/18f/cg-dashboard/static_src/skins/govau
ln -s ~/go/src/github.com/govau/ci-console/skin/ ~/go/src/github.com/18f/cg-dashboard/static/skins/govau
```

## Prettier

See [Prettier](https://github.com/prettier/prettier)'s docs for how to enable
automatic formatting on save for your editor.

If it's necessary to manually format, you can use the package script:

```sh
yarn format
```

# Deployment

## Requirements

* Node.js (version 8.x.x) and `npm` (which ships with Node.js) - `cg-dashboard`
  requires this in order to install its dependencies.

## Set up

Assuming the path to the `cg-dashboard` repository is `$CONSOLE_PATH`.

Make the skin directory and copy the skin files into `cg-dashboard`:

```sh
mkdir -p $CONSOLE_PATH/static_src/skins/govau
cp govau/ci-console/skin/index.js $CONSOLE_PATH/static_src/skins/govau/
mkdir -p $CONSOLE_PATH/static/skins/govau
cp -R govau/ci-console/skin/locales $CONSOLE_PATH/static/skins/govau/
```

## Build

When building the frontend, be sure to set the skin environment variables:

```sh
cd $CONSOLE_PATH

npm install

NODE_ENV="prod"
SKIN_NAME="govau"
SKIN_PROVIDES_TRANSLATIONS="true"

npm run build-prod
```

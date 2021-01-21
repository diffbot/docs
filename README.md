[![CircleCI](https://circleci.com/gh/diffbot/docs.svg?style=svg)](https://circleci.com/gh/diffbot/docs)

# Diffbot documentation

This repo contains the source files of the Diffbot documentation suite currently deployed at https://diffbot.github.io/docs

To contribute, either submit a pull request with an edit on this repository by adding or editing files in the `docs` folder, or click the `Edit` button on any page in the rendered website.

To add a new page:

1. Add the page into the `docs` subfolder
2. Add the page's ID into `sidebars.json` to reference it in the menus.

Note that if you want to add contributions that touch on design, images, landing page text or other non-documentation content, you need to edit the files in the `website` subdirectory.

## Building locally

To build and test the docs locally:

1. Make sure you have yarn installed ([yarnpkg.com](https://yarnpkg.com))
2. Clone this repo
3. `cd docs/website; yarn install`
4. run `yarn start`

This will open a browser with the local version running in live-reload mode, so you can see your changes as you save your files. Note that menus will not update with this approach, so you need to kill the server with `CTRL+C` and restart with `yarn start` to test menu changes.

## Static Pages

There are some static pages in the docs too - notably, the KG sections. We're working on making them dynamic, but for now they can be edited directly. Check `website/static/pages` to edit those.

## Building the Knowledge Graph Ontology

The KG Ontology can be built by running `node generateOntology`. This script downloads the latest ontology from ThothEntities and generate markdown files for each supported entity type. For more details, [see ./website/generateOntology.js](./website/generateOntology.js)
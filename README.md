
Boilerplate for building a modern Isomorphic React/Redux application.

## Features
* Server-side ES6 via Babel 6
* Client-side ES6 via Babel 6
* Code bundling via Webpack
* Separate Dev/Prod Builds
* React + Redux
* LESS -> CSS compiling/bundling
* LESS Imports via Modules.
* Routing powered React-Router + React-Router-Redux
* Hot Module Reloading of Reducers 
* Hot Module Loading of Components.
* Redux DevTools (Dock, Log and Slider).

## Unique Selling Point
A big focus of this project is for use as an educational tool. The commit history has been tightly managed to show a feature-by-feature evolution of the project:

* Initial Commit. Basic Express Hello World

	* `commit be14c3a857707534381f0a9b1ec40aed1e34ee23`
	* The simplest starting point. An Express-powered website that just says "Hello World"

* Babel ES6 transformation for server

	* `commit d6232a1f36db325c72f4d08bfe0e6fc4e1cd570f`
	* Use the babel runtime to run ES6 code within node

* Webpack bundling

	* `commit 4bd195e250afec8852bd735f31bf243832c97b14`
	* Introduces a simple webpack config, sends our bundled JS to the client

* Basic Redux App

	* `commit 9ec5400a11ece8422d9d1a5c00b010436e0c8514`
	* React/Redux introduced to the project via the classic Counter example

* LESS module loading via Webpack

	* `commit 7314d629508aa776877a005acf98dda0638897f5`
	* Styling the app with LESS, bundled with Webpack and imported alongside code modules

* Cleanup structure in preparation for Isomorphism

	* `commit 98305a6de42116fd302b543d129685805ab398fa`
	* Not important.
	* Minor commit to move the entry point for the server. Should probably be rebased/squashed out of existence.

* Separate builds for Development and Production. Redux Dev Tools added for Development

	* `commit c5f79e00d5090edd1c5c93b49bab7f3b496c16ba`
	* Introduces the concept of Development/Production to the build.
	* Adds Redux Dev Tools while in development mode for improved debugging
		* alt-h to hide/show
		* alt-q to move around the screen
		* alt-m to switch between log and slider

* Isomorphic

	* `commit 7c68d12bcce747568d9e96d747f05ce337bb4799`
	* Pre-render the application on the server side
	* State also carries across to the client

* Routing

	* `commit bf2e9ae6e4b0146593aa65cdc6952c9818e2520a`
	* Introduce Routing
	* Could do to be fleshed out more.

* Hot Reloading

	* `commit 62969c9f712a4d324d0a68facbf49ddca158a3f0`
	* Have changes reflecting on the client without having to explicitly rebuild/reload
	* Test changes to modules without losing state/changes in session
	* Hot-reloading working for both Components and Reducers

## Running the App

See HowToRun.md for instructions, based on the feature commit.


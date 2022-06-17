# Rails-React Demo

## Introduction

In this demo you will see how a (basic) React-based frontend works and consumes API endpoints provided by a Rails application that has been generated in API-only mode.

The backend application is based on Lab Assignment 6, in which you had to implement an API for accessing events and ticket types in the TicketShop. The React frontend is simple; it just contains index views for events and ticket types, but will be useful for you to understand how a single page application run in the browser interacts with a server backend.

## Pre-requisites

* You will need to have Node 16 or higher installed in your work environment.
* Ruby 3.1.x is required. RVM is recommended.

## Key directories and files

In the root of the repository, you will see the usual structure of a Rails project, with some additions:

* The `frontend` subdirectory contains the source code of the react-based frontend.
 * Therein, you will find two important subdirectories: `public` and `src`.
 * The public directory contains the assets that are downloaded by the web browser:
 * bundled `css` (`app.css`), bundled (i.e., by esbuild) javascript (`app.js`), the `index.html` page and other assets, such as icons and images.
 * The `src` directory contains the source files of the react-based frontend, including `index.js` (entrypoint of the React application).
  * The `App.js` file integrates the main components of the application and provides browser-based, [hashed routing](https://stackoverflow.com/a/36623117/19111458) to application components.
  * The components subdirectory contains the React components that are needed by `App.js`.

## Running the application

In the root directory, you may initialize the Rails API-only application as in previous lab assignments:

```sh
$rails db:migrate
$rails db:populate_fake_data
$rails s 
````

The application will use port 3000, as usual.

The frontend needs to be served by an independent web server, in a port different to the one used by Rails. 

You may launch the frontend server by switching to the `frontend` subdirectory and entering the following:

```sh
$npm install
$npm start
```

The frontend server will listen for connections in port 8000. Note that the server is solely intended for development, and is provided by esbuild. Every time you modify JavaScript components in frontend code, esbuild will automatically rebundle your code and output `frontend/public/js/app.js`

In a production environment, the frontend should be served by a dedicated web server, such as nginx or Apache.

With regard to the frontend, only the files in `frontend/public` are required in a production web server. 

## Useful links

* [Using Rails for API-only applications](https://edgeguides.rubyonrails.org/api_app.html)
* [React Documentation](https://reactjs.org/docs/getting-started.html)
* [Creating a React project with esbuild](https://devtails.xyz/how-to-replace-webpack-in-create-react-app-with-esbuild)

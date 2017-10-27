ScoreSheet
=====================

A web app that auto-calculates scores from board games using user-inputted values.

### Usage

Clone this repo.

```
git clone git@github.com:tasha-urbancic/scoresheet.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the servers.

```
npm install
npm start
(new terminal tab) npm run start-server
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Redux
* React-Router
* Webpack
* Socket.io
* Express
* Node
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

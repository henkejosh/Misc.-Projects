module.exports = {
  // context: "js"/* the directory containing the entry file */,
  entry: "./js/main.js"/* your `main` file */,
  output: {
    path: "./js"/* where `index.html` can find your bundle */,
    filename: "bundle.js"/* your `bundle` */
  },
  devtool: 'source-map'/* add 'source-map' to get line-sourced errors in Dev Tools*/
};

// NOTE: `context` and `path` are relative to this config file.

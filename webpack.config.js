module.exports = {
  entry: {
    index: __dirname+"/src/main.js"
  },
  output: {
    path: __dirname+"/dist/",
    filename: "[name].js"
  },
  watch: true
};
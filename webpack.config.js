module.exports = {

  entry: {index: __dirname+"/src/main.js"},

  output:{
    path: __dirname+"/dist",
    filename: "index.js"
  },

  watch: true,

  devServer: {
    contentBase: __dirname+"/dist",
    port: 8080
  },

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
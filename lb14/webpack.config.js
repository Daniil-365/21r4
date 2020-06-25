module.exports = {
    mode: 'development',
    entry: "./Lab14/there.js",
    output: {
        filename: "bundle.js"
    },
  


    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        }
      ]
    }
  }
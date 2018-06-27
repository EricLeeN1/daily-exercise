#webpack
6/27/2018 8:49:32 AM 
##entry
##output
##mode
	mode: 'production'/'development'
##loader
	1. rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
	2. 
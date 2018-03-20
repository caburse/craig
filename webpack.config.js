//var path = require( 'path' );

module.exports = {
	mode : 'development',
	entry : './src/sucka_free.js',
	output : {
//		path: path.resolve(__dirname, "build"),
		path: __dirname,
		filename : 'bundle.js'
	},
	devServer : {
		inline:true,
		compress: true,
//		port: 9000,
		historyApiFallback : {
			index : './index.html'
		}
	},
	module : {
		rules : [ 
			{test : /\.css?$/,use : [ 'style-loader', 'css-loader' ]},
			{test : /\.(ttf|eot|woff|woff2)$/,use : 'file-loader?fonts/[name].[ext]'},
			{test : /\.(jpg|png|svg)$/,use : [ 'url-loader?limit=10000' ]
			// better to use 'file-loader' in prod
			},
			{
				test : /\.jsx?$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader',
					options : {
						presets : [ 'env', 'react' ]
					}
				}
			}
		]
	}
};
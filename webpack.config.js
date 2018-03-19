module.exports = {
	mode : 'development',
	entry : './src/sucka_free.js',
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	devServer : {
		historyApiFallback : {
			index : './index.html'
		},
	},
	module : {
		rules : [ {
			test : /\.css?$/,
			use : [ 'style-loader', 'css-loader' ]
		}, {
			test : /\.(ttf|eot|woff|woff2)$/,
			use : 'file-loader?fonts/[name].[ext]'
		}, {
			test : /\.jsx?$/,
			exclude : /node_modules/,
			use : {
				loader : 'babel-loader',
				options : {
					presets : [ 'env', 'react' ]
				}
			}
		}, {
			test : /\.(jpg|png|svg)$/,
			use : [ 'url-loader?limit=10000' ]
		// better to use 'file-loader' in prod
		} ]
	}
};
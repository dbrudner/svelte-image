const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		bundle: ["./site/index.js"]
	},
	resolve: {
		alias: {
			svelte: path.resolve("node_modules", "svelte")
		},
		extensions: [".mjs", ".js", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"]
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js",
		chunkFilename: "[name].[id].js"
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: "svelte-loader",
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			minify: true,
			template: "./site/index.html"
		})
	]
};

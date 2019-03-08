module.exports = {
	siteMetadata: {
		title: `Raptori`,
		description: `Joe McGrath - Portfolio`,
		author: `@thisRaptori`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-root-import`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: 'posts',
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
	],
}

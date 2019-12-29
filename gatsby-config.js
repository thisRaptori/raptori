module.exports = {
	siteMetadata: {
		title: `Raptori`,
		description: `Joe McGrath - Portfolio`,
		author: `@thisRaptori`,
		url: `https://raptori.dev`,
	},
	plugins: [
		`gatsby-theme-waves`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-root-import`,
		`gatsby-plugin-react-helmet`,
		`gatsby-remark-reading-time`,
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
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							aliases: { js: 'javascript', html: 'markup' },
							noInlineHighlight: true,
						},
					},
					`gatsby-remark-smartypants`,
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Raptori`,
				short_name: `Raptori`,
				start_url: `/`,
				background_color: `#43b9b7`,
				theme_color: `#43b9b7`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-140200159-1',
			},
		},
		`gatsby-plugin-mdx`,
	],
}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { get } from 'src/utils'

const Image = ({ height, image, style, width }) => {
	const combinedStyles = { ...style }
	if (width) {
		combinedStyles.width = width
	}
	if (height) {
		combinedStyles.height = height
	}

	return image ? (
		<Img
			fluid={get(image, 'node', 'childImageSharp', 'fluid')}
			style={combinedStyle}
			{...props}
		/>
	) : null
}

export default Image

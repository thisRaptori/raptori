import React from 'react'
import Img from 'gatsby-image'

import { get } from 'src/utils'

const Image = ({ height, image, style, width, ...props }) => {
	const combinedStyles = { ...style }
	if (width) {
		combinedStyles.width = width
	}
	if (height) {
		combinedStyles.height = height
	}

	return image ? (
		<Img
			fluid={get(image, 'childImageSharp', 'fluid')}
			style={combinedStyles}
			{...props}
		/>
	) : null
}

export default Image

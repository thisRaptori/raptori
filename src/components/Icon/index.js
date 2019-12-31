import React from 'react'

import * as icons from './icons'

const Icon = ({ height, name, size, width, ...props }) =>
	icons[name]
		? React.createElement(icons[name], {
				height: height || size,
				width: width || size,
				...props,
		  })
		: null

Icon.defaultProps = {
	fill: 'currentColor',
	size: 24,
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 16 16',
}

export default Icon

import React from 'react'

import JumpSvg from '../Jump'

const Sun = props => (
	<div>
		<JumpSvg {...props} viewBox="-0.5 -0.5 16 16" strokeLinecap="round">
			<circle cx="7.5" cy="7.5" r="3.40909091" />
			<path d="M7.5,0 L7.5,1.36363636" />
			<path d="M7.5,13.6363636 L7.5,15" />
			<path d="M2.19545455,2.19545455 L3.16363636,3.16363636" />
			<path d="M11.8363636,11.8363636 L12.8045455,12.8045455" />
			<path d="M0,7.5 L1.36363636,7.5" />
			<path d="M13.6363636,7.5 L15,7.5" />
			<path d="M2.19545455,12.8045455 L3.16363636,11.8363636" />
			<path d="M11.8363636,3.16363636 L12.8045455,2.19545455" />
		</JumpSvg>
	</div>
)

Sun.defaultProps = {
	fill: 'none',
	stroke: 'currentColor',
}

export default Sun

import React from 'react'

import { useCssVariable } from 'src/hooks'
import { Gradient, Wave, Waves as Wrapper } from './styles'

const Waves = ({ invert, offset }) => {
	const primary = useCssVariable('--primary')

	return (
		<Wrapper className="background transition" invert={invert}>
			<Gradient />
			<Wave offset={offset} fill={primary} speed={0.8} size={1.0} />
			<Wave offset={offset} fill={primary} speed={1.1} size={1.1} />
			<Wave offset={offset} fill={primary} speed={1.2} size={0.9} />
			<Wave offset={offset} fill={primary} speed={1.3} size={0.7} />
			<Wave offset={offset} fill={primary} speed={1.6} size={0.8} />
		</Wrapper>
	)
}

export default Waves

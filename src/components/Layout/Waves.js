import React from 'react'

import { useCssVariable } from 'src/hooks'
import { Gradient, Wave, Waves as Wrapper } from './styles'

const Waves = () => {
	const primary = useCssVariable('--primary')

	return (
		<Wrapper className="background transition">
			<Gradient />
			<Wave fill={primary} speed={0.8} size={1.1} />
			<Wave fill={primary} speed={1.2} size={1} />
			<Wave fill={primary} speed={1.6} size={0.9} />
		</Wrapper>
	)
}

export default Waves

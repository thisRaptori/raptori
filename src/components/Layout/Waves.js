import React from 'react'

import { useCssVariable } from 'src/hooks'
import { Gradient, Wave, Waves as Wrapper } from './styles'

const Waves = () => {
	const primary = useCssVariable('--primary')

	return (
		<Wrapper className="background transition">
			<Gradient />
			<Wave fill={primary} speed={1} size={1} />
			<Wave fill={primary} speed={2} size={1.2} />
			<Wave fill={primary} speed={3} size={0.8} />
		</Wrapper>
	)
}

export default Waves

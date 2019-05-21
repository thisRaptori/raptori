import React from 'react'

import { useRaptoriTheme } from 'src/hooks'
import { Clip, Gradient, Wave, Waves as Wrapper } from './styles'

const Waves = ({ invert, offset }) => {
	const [isDark] = useRaptoriTheme()
	const fill = isDark ? '#42d0ca' : '#2db1b0'

	return (
		<Wrapper className="background transition" invert={invert}>
			<Gradient />
			<Clip className="background transition">
				<Wave offset={offset} fill={fill} speed={0.8} size={1.0} />
				<Wave offset={offset} fill={fill} speed={1.1} size={1.1} />
				<Wave offset={offset} fill={fill} speed={1.2} size={0.9} />
				<Wave offset={offset} fill={fill} speed={1.3} size={0.7} />
				<Wave offset={offset} fill={fill} speed={1.6} size={0.8} />
			</Clip>
		</Wrapper>
	)
}

export default Waves

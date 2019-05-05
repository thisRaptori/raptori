import React from 'react'
import styled from 'styled-components'

import { Icon } from 'src/components'
import { useRaptoriTheme } from 'src/hooks'

const Button = styled.button`
	svg {
		margin-bottom: 4px;
	}
`

const ThemeToggle = () => {
	const [isDark, toggleTheme] = useRaptoriTheme()

	return (
		<Button onClick={toggleTheme}>
			<Icon name={isDark ? 'Sun' : 'Moon'} />
		</Button>
	)
}

export default ThemeToggle

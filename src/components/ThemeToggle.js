import React from 'react'

import { Icon } from 'src/components'
import { useRaptoriTheme } from 'src/hooks'

const ThemeToggle = () => {
	const [isDark, toggleTheme] = useRaptoriTheme()

	return (
		<button onClick={toggleTheme}>
			<Icon name={isDark ? 'Sun' : 'Moon'} />
		</button>
	)
}

export default ThemeToggle

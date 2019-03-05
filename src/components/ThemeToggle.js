import React from 'react'

import { Icon } from 'src/components'

const ThemeToggle = () => {
	const [isDark, setIsDark] = React.useState(window.isCurrentThemeDark)
	const onClick = () => {
		setIsDark(val => {
			window.toggleRaptoriTheme(!val)
			return !val
		})
	}

	return (
		<button onClick={onClick}>
			<Icon name={isDark ? 'Sun' : 'Moon'} />
		</button>
	)
}

export default ThemeToggle

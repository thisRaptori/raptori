import React from 'react'

export default function useRaptoriTheme() {
	const [isThemeDark, setTheme] = React.useState(window.isCurrentThemeDark)

	React.useEffect(() => window.themeObservable.subscribe(setTheme), [])

	return [isThemeDark, window.toggleRaptoriTheme]
}

import React from 'react'

const windowGlobal = typeof window !== 'undefined' ? window : {}

export default function useRaptoriTheme() {
	const [isThemeDark, setTheme] = React.useState(
		windowGlobal.isCurrentThemeDark
	)

	React.useEffect(() => windowGlobal.themeObservable.subscribe(setTheme), [])

	return [isThemeDark, windowGlobal.toggleRaptoriTheme]
}

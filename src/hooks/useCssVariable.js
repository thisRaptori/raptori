import React from 'react'

const getValue = name => getComputedStyle(document.body).getPropertyValue(name).trim()

export default function useCssVariable(name) {
	const [value, setValue] = React.useState(getValue(name))

	React.useEffect(
		() => window.themeObservable.subscribe(() => setValue(getValue(name))),
		[]
	)

	return value
}

import React from 'react'

const defaults = {
	'--primary': '#43b9b7',
}

const getValue = name =>
	document
		? getComputedStyle(document.body)
				.getPropertyValue(name)
				.trim()
		: defaults[name]

export default function useCssVariable(name) {
	const [value, setValue] = React.useState(getValue(name))

	React.useEffect(
		() => window.themeObservable.subscribe(() => setValue(getValue(name))),
		[]
	)

	return value
}

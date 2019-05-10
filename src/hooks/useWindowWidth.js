import React from 'react'

const documentGlobal = typeof document !== 'undefined' && document

const getOffsetWidth = () =>
	documentGlobal ? documentGlobal.body.offsetWidth : 300

export default function useWindowWidth() {
	const [width, setWidth] = React.useState(getOffsetWidth())

	React.useEffect(() => {
		const handleResize = () => setWidth(getOffsetWidth())
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}

import React from 'react'

const getOffsetWidth = () => (document ? document.body.offsetWidth : 300)

export default function useWindowWidth() {
	const [width, setWidth] = React.useState(getOffsetWidth())

	React.useEffect(() => {
		const handleResize = () => setWidth(getOffsetWidth())
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}

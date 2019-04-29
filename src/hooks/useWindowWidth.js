import React from 'react'

export default function useWindowWidth() {
	const [width, setWidth] = React.useState(document.body.offsetWidth)

	React.useEffect(() => {
		const handleResize = () => setWidth(document.body.offsetWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}

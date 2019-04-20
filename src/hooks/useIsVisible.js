import React from 'react'

import useWindowWidth from './useWindowWidth'

export default function useIsVisible() {
	const ref = React.useRef()
	const width = useWindowWidth()
	const [isVisible, setIsVisible] = React.useState()

	React.useEffect(() => {
		const handler = () =>
			setIsVisible(
				ref.current &&
					ref.current.getBoundingClientRect().top < window.innerHeight
			)

		window.addEventListener('scroll', handler)
		return () => window.removeEventListener('scroll', handler)
	}, [width])

	return [ref, isVisible]
}

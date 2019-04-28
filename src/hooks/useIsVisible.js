import React from 'react'

export default function useIsVisible() {
	const ref = React.useRef()
	const [isVisible, setIsVisible] = React.useState()

	React.useEffect(() => {
		const handler = () =>
			setIsVisible(
				ref.current &&
					ref.current.getBoundingClientRect().top < window.innerHeight
			)

		handler()
		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	}, [])

	return [ref, isVisible]
}

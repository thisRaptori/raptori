import React from 'react'

let documentGlobal

const getDocumentGlobal = () => {
	documentGlobal = typeof document !== 'undefined' && document
	return documentGlobal
}

getDocumentGlobal()

const getOffsetWidth = () => documentGlobal && documentGlobal.body.offsetWidth

export default function useWindowWidth() {
	const [width, setWidth] = React.useState(getOffsetWidth())

	React.useEffect(() => {
		let checkForClientLoadInterval
		const handleResize = () => setWidth(getOffsetWidth())

		const checkForClientLoad = () => {
			if (getDocumentGlobal()) {
				clearInterval(checkForClientLoadInterval)

				// offsetWidth - 1 is used here to ensure the state
				// changes and React re-renders
				setWidth(() => getOffsetWidth() - 1)
				setWidth(() => getOffsetWidth())
			}
		}

		window.addEventListener('resize', handleResize)
		checkForClientLoadInterval = setInterval(checkForClientLoad, 1)

		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(checkForClientLoadInterval)
		}
	}, [])

	return width
}

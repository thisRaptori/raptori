import useWindowWidth from './useWindowWidth'

export default function useIsMobile() {
	const width = useWindowWidth()
	return width < 500
}

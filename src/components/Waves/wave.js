import { encodeSvg } from 'src/utils'

export default function createWave(props) {
	const svgProps = [
		['fill', 'none'],
		['preserveAspectRatio', 'xMinYMin meet'],
		['viewBox', '0 0 500 100'],
		['xmlns', 'http://www.w3.org/2000/svg'],
	].map(([key, value]) => [key, props[key] || value], [])

	const svg = `
		<svg ${svgProps.reduce((str, [key, value]) => `${str} ${key}="${value}"`, '')}>
			<path d="M500,29 L500,100 L0,100 L0,29 C150,78 300,-30 500,29 Z"></path>
		</svg>
	`

	return encodeSvg(svg)
}

import { encodeSvg } from 'src/utils'

export default function createWave(props) {
	const svgProps = Object.entries({
		fill: 'red',
		preserveAspectRatio: 'xMinYMin meet',
		viewBox: '0 0 500 100',
		xmlns: 'http://www.w3.org/2000/svg',
	}).reduce((acc, [key, value]) => {
		acc[key] = props[key] || value
		return acc
	}, {})

	const svg = `
		<svg ${Object.entries(svgProps).reduce(
			(str, [key, value]) => `${str} ${key}="${value}"`,
			''
		)}>
			<path d="M500,29 L500,100 L0,100 L0,29 C150,128 350,-70 500,29 Z"></path>
		</svg>
	`

	return encodeSvg(svg)
}

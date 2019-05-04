import { compose } from './general'

export const collapseGapsBetweenTags = str => str.replace(/>\s{1,}</g, '><')

export const collapseWhitespace = str => str.replace(/\s{2,}/g, ' ')

export const encodeSymbols = str =>
	str.replace(/[\r\n"%#<>?[\\\]^`{|}]/g, encodeURIComponent)

export const replaceQuotes = str => str.replace(/"/g, "'")

export const cleanSvg = compose(
	replaceQuotes,
	collapseGapsBetweenTags,
	collapseWhitespace,
	encodeSymbols
)

export const encodeSvg = svg => `url("data:image/svg+xml,${cleanSvg(svg)}")`

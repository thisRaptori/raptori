import { compose } from './general'

const replaceQuotes = str => str.replace(/"/g, "'")

const replaceWhitespace = str => str.replace(/>\s{1,}</g, '><')

const replaceNewlines = str => str.replace(/\s{2,}/g, ' ')

const replaceSymbols = str =>
	str.replace(/[\r\n"%#()<>?[\\\]^`{|}]/g, encodeURIComponent)

const cleanSvg = compose(
	replaceQuotes,
	replaceWhitespace,
	replaceNewlines,
	replaceSymbols
)

export const encodeSvg = svg => `url("data:image/svg+xml,${cleanSvg(svg)}")`

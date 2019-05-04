import {
	cleanSvg,
	collapseGapsBetweenTags,
	collapseWhitespace,
	encodeSvg,
	encodeSymbols,
	replaceQuotes,
} from './svg'

const nl = `
`

const svg = `
<svg fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M500,29 L500,100 L0,100 L0,29 C150,78 300,-30 500,29 Z"></path>
</svg>
`

describe('collapseGapsBetweenTags', () => {
	it('should collapse whitespace between <> tags', () => {
		expect(collapseGapsBetweenTags('>      <')).toBe('><')
		expect(collapseGapsBetweenTags(`>${nl}${nl}${nl}<`)).toBe('><')
	})

	it('should ignore other whitespace', () => {
		expect(collapseGapsBetweenTags('text    with    spaces')).toBe(
			'text    with    spaces'
		)
		expect(collapseGapsBetweenTags(`text${nl}with${nl}newlines`)).toBe(
			`text${nl}with${nl}newlines`
		)
	})
})

describe('collapseWhitespace', () => {
	it('should collapse multiple spaces into one', () => {
		expect(collapseWhitespace('text with  spaces')).toBe('text with spaces')
		expect(collapseWhitespace('      ')).toBe(' ')
	})

	it('should convert newlines into spaces', () => {
		expect(collapseWhitespace(`${nl}${nl}${nl}`)).toBe(' ')
	})
})

describe('encodeSymbols', () => {
	it('should url encode special characters', () => {
		expect(encodeSymbols('" % # < > ? [ ] ^ ` { | } ] \\')).toBe(
			'%22 %25 %23 %3C %3E %3F %5B %5D %5E %60 %7B %7C %7D %5D %5C'
		)
		expect(encodeSymbols(`${nl}`)).toBe('%0A')
	})
})

describe('replaceQuotes', () => {
	it('should replace double quotes with single', () => {
		expect(replaceQuotes('"test"')).toBe("'test'")
		expect(replaceQuotes('""""""')).toBe("''''''")
		expect(replaceQuotes('none')).toBe('none')
	})
})

describe('cleanSvg', () => {
	it('should URI encode an svg', () => {
		expect(cleanSvg(svg)).toBe(
			'%0A%3Csvg fill=%22none%22 preserveAspectRatio=%22xMinYMin meet%22 viewBox=%220 0 500 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%0A %3Cpath d=%22M500,29 L500,100 L0,100 L0,29 C150,78 300,-30 500,29 Z%22%3E%3C/path%3E%0A%3C/svg%3E%0A'
		)
	})
})

describe('encodeSvg', () => {
	it('should encode an svg as a data attribute', () => {
		expect(encodeSvg(svg)).toBe(
			'url("data:image/svg+xml,%0A%3Csvg fill=%22none%22 preserveAspectRatio=%22xMinYMin meet%22 viewBox=%220 0 500 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%0A %3Cpath d=%22M500,29 L500,100 L0,100 L0,29 C150,78 300,-30 500,29 Z%22%3E%3C/path%3E%0A%3C/svg%3E%0A")'
		)
	})
})

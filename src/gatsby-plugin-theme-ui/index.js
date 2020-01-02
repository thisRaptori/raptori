import blogTheme from 'gatsby-plugin-theme-ui/index'
import merge from 'deepmerge'

const customWavesTheme = {
	breakpoints: ['1000px', '1700px'],
	styles: {
		waves: {
			default: {
				Wave: {
					display: ['block', 'flex'],
					marginBottom: '4rem',
					marginLeft: [0, 'calc(50% - 45vw)', 'calc(50% - 765px)'],
					marginTop: '4rem',
					position: 'relative',
					width: ['100%', '90vw', '1530px'],
				},
				ScrollerContainer: {
					flex: 1,
					paddingLeft: [0, '2rem'],
					paddingTop: ['2rem', 0],
				},
				ScrollerStep: {
					alignItems: 'center',
					borderLeft: ['none', '3px solid var(--foreground)'],
					display: 'flex',
					minHeight: '25rem',
					padding: '2rem',
					position: 'relative',
				},
				ScrollerProgress: {
					backgroundColor: 'var(--primary)',
					left: ['-1.3rem', '-.3rem'],
					position: 'absolute',
					width: '3px',
				},
				StickerContainer: {
					height: ['calc(50vh - 4.2rem)', 'auto'],
					marginLeft: ['calc(50% - 50vw)', 0],
					position: ['sticky', 'static'],
					top: ['4.2rem', 'auto'],
					width: ['100%', '60%'],
					zIndex: [1, 'auto'],
				},
				Sticker: {
					background: 'transparent',
					height: ['100%', '60vh'],
					position: ['static', 'sticky'],
					top: ['auto', '20vh'],
					width: '100%',
				},
				// this is used to select the active scroller step
				// 0.5 selects the step that is at half the screen height
				// 0.7 the step that is at 70% the screen height
				focus: [0.7, 0.4],
			},
		},
		CodeSurfer: {
			pre: {
				backgroundColor: 'var(--background)',
				color: 'var(--higlight)',
			},
			code: {
				backgroundColor: 'transparent',
				padding: '0',
			},
			tokens: {
				'comment cdata doctype': {
					fontStyle: 'italic',
				},
				'builtin changed keyword string attr-value char inserted selector attr-name': {
					color: 'var(--primary)',
				},
				'tag deleted number property boolean constant symbol': {
					color: 'var(--secondary)',
				},
				'operator entity url': {
					color: 'var(--text)',
				},
				'punctuation comment': {
					color: '#85929b',
				},
				'function method': {
					color: 'var(--alternate)', // -> var(--alternate) and get a darker version for light screens
				},
				'regex important variable': {
					color: 'var(--contrast)',
				},
			},
			title: {},
			subtitle: {
				color: '#d6deeb',
				backgroundColor: 'rgba(10,10,10,0.9)',
			},
			unfocused: {
				opacity: 0.3,
			},
		},
	},
}

export default merge(blogTheme, customWavesTheme)

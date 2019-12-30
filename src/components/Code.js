import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

const theme = {
	plain: {
		color: 'var(--light)',
		backgroundColor: 'none',
	},
	styles: [
		{
			types: ['prolog', 'comment', 'doctype', 'cdata', 'punctuation'],
			style: {
				color: '#85929b',
			},
		},
		{
			types: [
				'builtin',
				'changed',
				'keyword',
				'selector',
				'attr-name',
				'string',
				'char',
				'inserted',
				'atrule',
				'attr-value',
				'maybe-class-name',
			],
			style: {
				color: 'var(--primary)',
			},
		},
		{
			types: [
				'number',
				'property',
				'tag',
				'boolean',
				'constant',
				'symbol',
				'deleted',
			],
			style: {
				color: 'var(--secondary-light)',
			},
		},
		{
			types: ['operator', 'entity', 'url'],
			style: {
				color: 'var(--light)',
			},
		},
		{
			types: ['function', 'method'],
			style: {
				color: '#34d8ff',
			},
		},
		{
			types: ['regex', 'important', 'variable'],
			style: {
				color: 'var(--contrast)',
			},
		},
	],
}

const Code = ({ codeString, language }) => {
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={theme}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<div className="gatsby-highlight" data-language={language}>
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				</div>
			)}
		</Highlight>
	)
}

export default Code

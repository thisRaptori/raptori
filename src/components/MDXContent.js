import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { preToCodeBlock } from 'mdx-utils'
import { MDXProvider } from '@mdx-js/react'

import Code from './Code'

const mdxComponents = {
	pre: preProps => {
		const props = preToCodeBlock(preProps)
		if (props) {
			return <Code {...props} />
		}
		return <pre {...preProps} />
	},
	wrapper: ({ children }) => <>{children}</>,
}

const Content = styled.div`
	ol,
	ul {
		padding-left: 2rem;
	}

	ul {
		list-style-type: disc;
	}
`

const MDXContent = ({ children }) => (
	<Content>
		<MDXProvider components={mdxComponents}>
			<MDXRenderer>{children}</MDXRenderer>
		</MDXProvider>
	</Content>
)

export default MDXContent

import React from 'react'
import styled from 'styled-components'

import { Link } from 'src/components'

const List = styled.ul`
	display: flex;
	margin: 3rem -5px 0;
`

const ListItem = styled.li`
	* {
		border-radius: 4px;
		display: flex;
		line-height: 32px;
		margin: 0 5px;
		padding: 0 16px;
		text-decoration: none;
	}

	span {
		background: var(--primary);
		color: var(--background);
	}

	a {
		background: transparent;
		color: var(--primary) !important;

		&:hover {
			background: var(--secondary);
			color: var(--background) !important;
		}
	}
`

const Pagination = ({ currentPage, pageCount }) => (
	<List>
		{Array.from({ length: pageCount }).map((_, i) => (
			<ListItem key={i + 1}>
				{React.createElement(currentPage === i + 1 ? 'span' : Link, {
					children: i + 1,
					to: i === 0 ? `/blog` : `/blog/${i + 1}`,
				})}
			</ListItem>
		))}
	</List>
)

export default Pagination

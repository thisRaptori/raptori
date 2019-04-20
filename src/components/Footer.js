import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
	color: var(--dark);
`

const Text = styled.p`
	margin: 2rem;
	text-align: center;
`

const year = new Date().getFullYear()

const Footer = React.forwardRef((props, ref) => (
	<Wrapper ref={ref}>
		<Text>Copyright {year} Joe McGrath</Text>
	</Wrapper>
))

export default Footer

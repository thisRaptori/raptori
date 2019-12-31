import styled from 'styled-components'

const Jump = styled.svg`
	*:hover > & {
		animation: jump 0.3s forwards;
		transform-origin: center;
		transition: all ease;
	}
`

export default Jump

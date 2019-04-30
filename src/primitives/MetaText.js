import styled from 'styled-components'

const MetaText = styled.p`
	${props => props.italic && 'font-style: italic;'}
	line-height: 1.2;
	opacity: 0.7;
`

export default MetaText

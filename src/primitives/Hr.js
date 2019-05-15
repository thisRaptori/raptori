import styled from 'styled-components'

const Hr = styled.hr(props => {
	const margin = props.margin ? `margin: ${props.margin}rem 0;` : ''

	return `
        ${margin}
`
})

export default Hr

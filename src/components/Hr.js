import styled from 'styled-components'

const Hr = styled.hr(props => {
	const margin = props.margin ? `margin: ${props.margin * 10}rem 0;` : ''

	return `
        ${margin}
`
})

export default Hr

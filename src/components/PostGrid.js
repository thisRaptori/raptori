import styled from 'styled-components'

export default styled.div`
	margin: 20rem 10rem;

	@media (min-width: 600px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 60rem;
		margin-top: 30rem;

		a {
			margin-top: 0 !important;
		}
	}
`

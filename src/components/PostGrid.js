import styled from 'styled-components'

export default styled.div`
	margin: 2rem 1rem;

	@media (min-width: 600px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 6rem;
		margin-top: 3rem;

		a {
			margin-top: 0 !important;
		}
	}
`

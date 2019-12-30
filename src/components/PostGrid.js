import styled, { css } from 'styled-components'

const wideGrid = css`
	@media (min-width: 780px) {
		margin-left: calc(320px - 40vw);
		width: 80vw;
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1425px) {
		margin-left: -250px;
		width: 1140px;
	}
`

const PostGrid = styled.div`
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

	${props => (props.wide ? wideGrid : null)}
`

export default PostGrid

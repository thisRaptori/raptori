import styled from 'styled-components'

import createWave from './wave'

export const Main = styled.main`
	margin: 0 auto;
	max-width: 600px;
	padding: 20px;
`

export const Below = styled.div`
	color: var(--dark);
	margin: 0 auto;
	max-width: 600px;
	padding: 20px;
`

export const Waves = styled.div`
	height: 120px;
	overflow: hidden;
	position: relative;
	width: 100%;
`

export const Wave = styled.div`
	animation: move_wave ${props => 20 + 10 * props.speed}s linear infinite;
	background-repeat: repeat-x;
	background: ${createWave};
	bottom: 0;
	height: ${props => props.size * 100}px;
	opacity: 0.5;
	position: absolute;
	width: ${props => props.size * 400 * 20}px;
`

export const Gradient = styled.div`
	background-image: linear-gradient(transparent, var(--primary));
	bottom: 0;
	height: 40px;
	left: 0;
	position: absolute;
	right: 0;
`

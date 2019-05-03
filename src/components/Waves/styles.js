import styled from 'styled-components'

import createWave from './wave'

export const Waves = styled.div`
	height: 120px;
	overflow: hidden;
	position: relative;
	width: 100%;

	${props =>
		props.invert &&
		`
		transform: scaleY(-1);
	`}
`

export const Wave = styled.div`
	animation: move_wave ${props => 15 + 15 * props.speed}s linear infinite;
	background-repeat: repeat-x;
	background: ${createWave};
	bottom: 0;
	height: ${props => props.size * 100}px;
	opacity: 0.5;
	position: absolute;
	width: ${props => props.size * 400 * 20}px;

	${props => props.offset && 'animation-delay: -8s;'}
`

export const Gradient = styled.div`
	background-image: linear-gradient(transparent, var(--primary));
	bottom: 0;
	height: 40px;
	left: 0;
	position: absolute;
	right: 0;
`

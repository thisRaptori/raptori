import styled from 'styled-components'

import createWave from './wave'

export const Waves = styled.div`
	height: 120px;
	position: relative;
	width: 100%;
	${props => props.invert && 'transform: scaleY(-1);'}
`

export const Wave = styled.div`
	animation: move_wave ${props => 15 + 15 * props.speed}s linear infinite;
	background-repeat: repeat-x;
	background: ${createWave};
	bottom: 0;
	height: ${props => props.size * 100}px;
	opacity: 0.3;
	position: absolute;
	width: ${props => props.size * 400 * 20}px;

	animation-delay: ${props => (props.offset ? '-12s' : '-4s')};
`

export const Gradient = styled.div`
	background-image: linear-gradient(var(--primary-transparent), var(--primary) 90%);
	bottom: -4px;
	height: 40px;
	left: 0;
	position: absolute;
	right: 0;
	z-index: 2;
`

export const Clip = styled.div`
	bottom: -2px;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: -2px;
	z-index: 1;
`

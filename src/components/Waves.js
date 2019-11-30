import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { useRaptoriTheme } from 'src/hooks'

const Canvas = styled.canvas`
	border-bottom: 5px solid var(--primary);
	height: 100px;
	${props => (props.invert ? 'margin-top' : 'margin-bottom')}: -5px;
	vertical-align: bottom;
	width: 100vw;

	${props => (props.invert ? 'transform: scale(1, -1);' : '')}
`

// colour values as [dark, light]
// convert to tuples in form [min, range]
const ranges = [
	[45, 66], // red
	[178, 208], // green
	[176, 202], // blue
].map(([dark, light]) => [dark, light - dark])
const frameCount = Math.floor(200 / 16)

// pre-calculate the transition frame colours
const frames = Array.from(Array(frameCount + 1), (_, frame) =>
	rgba(
		...ranges.map(([min, range]) =>
			Math.floor(min + (range * frame) / frameCount)
		),
		0.29
	)
)

function getColor(index) {
	return (
		frames[Math.floor(index - 1)] ||
		(index > frames.length ? frames[frames.length] : frames[0])
	)
}

const count = 2000
function createWave({ canvas, count, ctx, fill }, speed) {
	const values = {
		a: Math.random() * 2,
		b: Math.random() * 4,
		c: Math.random() * 6,
	}

	const createGetValue = (key, magnitude) => () => {
		values[key] += speed / magnitude
		if (values[key] > Math.PI * 100) {
			values[key] -= Math.PI * 100
		}
		return values[key]
	}

	const getA = createGetValue('a', 100)
	const getB = createGetValue('b', 500)
	const getC = createGetValue('c', 1000)

	const getNextY = () =>(
		[getA(), getB() / 2, getC() / 4].reduce(
			(acc, cur, i) => acc + (Math.sin(cur) + 1) / (i + 1),
			0
		) / 4
	)

	const points = Array.from(Array(count), getNextY).reverse()

	return {
		render() {
			const height = canvas.height
			const width = canvas.clientWidth
			const step = width > 2000
				? count / 10000
				: count / (width * 5)
			const nextY = getNextY()

			points.pop()

			ctx.fillStyle = fill.current
			ctx.beginPath()
			ctx.moveTo(0, nextY)

			points.forEach((y, x) => {
				ctx.lineTo(x * step, y * height)
			})

			ctx.lineTo(width, height)
			ctx.lineTo(0, height)
			ctx.lineTo(0, nextY)
			ctx.closePath()
			ctx.fill()

			points.unshift(nextY)
		},
	}
}

function createWaves(ref, waves, fill) {
	const canvas = ref
	const ctx = canvas.getContext('2d')

	// storing waves in a ref so that switching colour scheme
	// does not cause the wave shapes to be reset
	if (!waves.current) {
		const data = { canvas, ctx, count, fill }
		waves.current = [
			createWave(data, 0.8),
			createWave(data, 0.8),
			createWave(data, 1),
			createWave(data, 1),
			createWave(data, 1.2),
			createWave(data, 1.2),
		]
	}

	let cancel
	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		waves.current.forEach(wave => wave.render())

		if (cancel) {
			return
		}

		requestAnimationFrame(loop)
	}
	loop()

	return () => {
		cancel = true
	}
}

const Waves = props => {
	const [isDark] = useRaptoriTheme()
	const [ref, setRef] = React.useState()
	const wavesRef = React.useRef()
	const fill = React.useRef(isDark ? frames[0] : frames[frames.length - 1])

	React.useEffect(() => {
		const step = isDark ? 1 : -1
		let frame = frames.indexOf(fill.current)
		let cancel

		function loop() {
			frame += step
			fill.current = getColor(frame)

			if (cancel || frame <= 0 || frame >= frames.length - 1) {
				return
			}

			requestAnimationFrame(loop)
		}
		loop()

		return () => {
			cancel = true
		}
	}, [fill, isDark])

	React.useEffect(() => {
		if (ref) {
			return createWaves(ref, wavesRef, fill)
		}
	}, [fill, ref, wavesRef])

	return <Canvas ref={setRef} {...props} />
}

export default Waves

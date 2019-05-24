;(function() {
	let waitUntilScrollEnd
	let throttle
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		if (waitUntilScrollEnd || throttle) {
			return
		}
		throttle = setTimeout(() => {
			throttle = undefined
		}, 32)
		const skewStrength = Math.min(Math.max(-30, event.gamma), 30)
		// flip the number when the phone is facing towards the user
		const skewValue = event.beta > 90 ? skewStrength : -skewStrength
		gatsbyRoot.style.setProperty('--skew', `${skewValue}deg`)
	}
	const scrollHandler = () => {
		if (waitUntilScrollEnd) {
			clearTimeout(waitUntilScrollEnd)
		}
		waitUntilScrollEnd = setTimeout(() => {
			waitUntilScrollEnd = undefined
		}, 32)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
	window.addEventListener('scroll', scrollHandler, true)
})()

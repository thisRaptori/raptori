;(function() {
	let throttle
	let userIsScrolling
	const gatsbyRoot = document.getElementById('___gatsby')

	const unsetIsScrolling = () => {
		userIsScrolling = undefined
	}
	const unsetThrottle = () => {
		throttle = undefined
	}

	const rotationHandler = event => {
		if (userIsScrolling || throttle) {
			return
		}
		throttle = setTimeout(unsetThrottle, 32)
		const skewStrength = Math.min(Math.max(-30, event.gamma), 30)
		// flip the number when the phone is facing towards the user
		const skewValue = event.beta > 90 ? skewStrength : -skewStrength
		gatsbyRoot.style.setProperty('--skew', `${skewValue}deg`)
	}

	const scrollHandler = () => {
		if (userIsScrolling) {
			clearTimeout(userIsScrolling)
		}
		userIsScrolling = setTimeout(unsetIsScrolling, 32)
	}

	window.addEventListener('deviceorientation', rotationHandler, true)
	window.addEventListener('scroll', scrollHandler, true)
})()

;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		const skewStrength = Math.min(Math.max(-30, event.gamma), 30)
		// flip the number when the phone is facing towards the user
		const skewValue = event.beta > 90 ? skewStrength : -skewStrength
		gatsbyRoot.style.setProperty('--skew', `${skewValue}deg`)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

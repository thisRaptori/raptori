;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		const skewValue = -Math.min(Math.max(-30, event.gamma), 30)
		gatsbyRoot.style.setProperty('--skew', `${skewValue}deg`)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		const skewValue = -Math.min(30, Math.max(-30, event.gamma))
		gatsbyRoot.style.setProperty('--skew', `${skewValue}deg`)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

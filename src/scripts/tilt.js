;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		gatsbyRoot.style.setProperty('--skew', `${event.gamma / 10}deg`)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

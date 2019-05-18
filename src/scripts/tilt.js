;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		gatsbyRoot.style.setProperty('--skew', `${event.gamma / 10}deg`)
		console.log(event)
	}
	rotationHandler({ gamma: 90 })
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

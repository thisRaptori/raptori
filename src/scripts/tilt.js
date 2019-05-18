;(function() {
	const gatsbyRoot = document.getElementById('___gatsby')
	const rotationHandler = event => {
		gatsbyRoot.style.setProperty(
			'--skew',
			`${-Math.min(event.gamma, 30)}deg`
		)
	}
	window.addEventListener('deviceorientation', rotationHandler, true)
})()

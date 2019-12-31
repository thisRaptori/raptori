;(function() {
	var listeners = []
	var next = () => {
		listeners.forEach(l => l(window.isCurrentThemeDark))
	}

	var themeQuery = matchMedia('(prefers-color-scheme: dark)')
	window.isCurrentThemeDark = false

	window.themeObservable = {
		subscribe: listener => {
			listeners.push(listener)
			return () => listeners.filter(l => l !== listener)
		},
	}

	function getTheme(e) {
		setTheme(e.matches)
	}

	function setTheme(isNextThemeDark) {
		window.isCurrentThemeDark = isNextThemeDark
		document.body.className = window.isCurrentThemeDark ? 'dark' : 'light'
		next()
	}

	window.toggleRaptoriTheme = function() {
		isNextThemeDark = !window.isCurrentThemeDark
		setTheme(isNextThemeDark)
		try {
			localStorage.setItem('isThemeDark', isNextThemeDark)
		} catch (err) {}
	}

	themeQuery.addListener(getTheme)

	try {
		var storedTheme = localStorage.getItem('isThemeDark')
		if (storedTheme) {
			setTheme(storedTheme === 'true')
		} else {
			getTheme(themeQuery)
		}
	} catch (err) {}
})()

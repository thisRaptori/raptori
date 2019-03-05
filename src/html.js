import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								var themeQuery = matchMedia('(prefers-color-scheme: dark)');
								window.isCurrentThemeDark = false;

								window.themeObservable = {
									listeners: [],
									subscribe: (listener) => {
										window.themeObservable.listeners.push(listener)
										return () => window.themeObservable.listeners.filter(l => l !== listener)
									},
									next: () => {
										window.themeObservable.listeners.forEach(l => l(window.isCurrentThemeDark))
									}
								}

								function setTheme(isNextThemeDark) {
									window.isCurrentThemeDark = isNextThemeDark;
									document.body.className = window.isCurrentThemeDark ? 'dark' : 'light';
									themeObservable.next()
								}

								window.toggleRaptoriTheme = function() {
									isNextThemeDark = !window.isCurrentThemeDark;
									setTheme(isNextThemeDark);
									try {
										localStorage.setItem('isThemeDark', isNextThemeDark);
									} catch(err) {}
								}

								themeQuery.addListener(function(e) {
									setTheme(e.matches);
								});

								try {
									isStoredThemeDark = localStorage.getItem('isThemeDark');
									setTheme(isStoredThemeDark);
								} catch(err) {}
							})();
						`,
					}}
				/>
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}

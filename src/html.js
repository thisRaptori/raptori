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
								var listeners = [];
								var next = () => {
									listeners.forEach(l => l(window.isCurrentThemeDark))
								}

								var themeQuery = matchMedia('(prefers-color-scheme: dark)');
								window.isCurrentThemeDark = false;

								window.themeObservable = {
									subscribe: (listener) => {
										listeners.push(listener)
										return () => listeners.filter(l => l !== listener)
									},
								}

								function setTheme(isNextThemeDark) {
									window.isCurrentThemeDark = isNextThemeDark;
									document.body.className = window.isCurrentThemeDark ? 'dark' : 'light';
									next()
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
									var isStoredThemeDark = localStorage.getItem('isThemeDark') === 'true';
									setTheme(isStoredThemeDark);
								} catch(err) {}
							})();
						`,
					}}
				/>
				<div id="particles-js" />
				<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							particlesJS('particles-js', {
								particles: {
									number: { value: 600 },
									color: { value: ['#43b9b7', '#2f3d4c', '#d5e2eb'] },
									shape: {
										type: 'star',
									},
									opacity: {
										value: 1,
										anim: {
											enable: true,
											speed: 2,
											opacity_min: 0,
										},
									},
									size: {
										value: 1,
										random: true,
										anim: { enable: false, speed: 4, size_min: 0.2, sync: false },
									},
									line_linked: {
										enable: false,
									},
									move: {
										enable: true,
										speed: 6,
										direction: 'right',
									},
								},
								interactivity: {
									events: {
										onhover: { enable: false },
										resize: true,
									},
								},
								retina_detect: true,
						})`,
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

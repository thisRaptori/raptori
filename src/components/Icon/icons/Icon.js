import React from 'react'

const Icon = props => (
	<svg {...props}>
		<defs>
			<linearGradient x1="50%" y1="100%" x2="50%" y2="75%" id="gradient">
				<stop stopColor="var(--primary)" offset="0%" />
				<stop
					stopColor="var(--primary)"
					stopOpacity="0"
					offset="100%"
				/>
			</linearGradient>
		</defs>
		<mask id="mask">
			<path d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z" />
		</mask>
		<path
			d="M16.125,6.10446513 L16.125,24.39125 L-3.375,24.39125 L-3.375,6.10446513 C2.475,10.0979651 8.325,1.29596513 16.125,6.10446513 Z"
			fillOpacity="0.5"
			fill="var(--primary)"
			mask="url(#mask)"
		/>
		<path
			d="M32,9.24406956 L32,18.51 L0,18.51 L0,9.24406956 C9.11853027,19.5759277 20.3210449,-2.67749023 32,9.24406956 Z"
			fillOpacity="0.5"
			fill="var(--primary)"
			mask="url(#mask)"
		/>
		<polygon
			fill="url(#gradient)"
			mask="url(#mask)"
			points="0 0 1.65563965 0 16 0 16 16 0 16"
		/>
		<path
			d="M24.375,9.80686632 L24.375,16.385 L-7.625,16.385 L-7.625,9.80686632 C3.22546387,16.0645752 8.32851231,2.95409285 24.375,9.80686632 Z"
			fillOpacity="0.5"
			fill="var(--primary)"
			mask="url(#mask)"
		/>
	</svg>
)

export default Icon

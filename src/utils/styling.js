export const getSectionWidth = props =>
	props.width ? `${props.width}px` : '100vw'

export const fullWidth = props => `
    translateX(calc((640px - ${getSectionWidth(props)}) / 2))
`

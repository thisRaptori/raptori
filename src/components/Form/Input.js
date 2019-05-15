import React from 'react'
import styled from 'styled-components'

const P = styled.p`
	label {
		display: flex;
	}

	input {
		background: transparent;
		border: 1px solid currentColor;
		border-radius: 4px;
		color: inherit;
		flex: 1 1 100%;
		font-size: inherit;
        margin: 0 0.5em;
		padding: 0.2em 0.5em;
        
        ::placeholder {
            color: inherit;
            opacity: .5;
        }
	}
`

const Input = ({
	hidden,
	label,
	name,
	onChange,
	placeholder,
	type = 'text',
	value,
}) => (
	<P hidden={hidden}>
		<label>
			{label}
			<input
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
		</label>
	</P>
)

export default Input

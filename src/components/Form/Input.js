import React from 'react'
import styled from 'styled-components'

const P = styled.p`
	label {
		display: flex;
		flex-direction: column;
	}

	input {
		background: transparent;
		border: none;
		border-bottom: 1px solid currentColor;
		color: inherit;
		flex: 1 1 100%;
		font-size: 0.8em;
		margin: 0;
		opacity: 0.5;
		padding: 0.5em 0;

		::placeholder {
			color: inherit;
		}

		&:focus {
			box-shadow: 0 -1px 0 currentColor inset;
			opacity: 1;
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

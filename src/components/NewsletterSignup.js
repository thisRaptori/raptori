import React from 'react'
import styled from 'styled-components'

import { Form, StyledLink } from 'src/components'
import { encode } from 'src/utils'

const H3 = styled.h3`
	margin-top: 0;
`

const NewsletterForm = styled.div`
	background: var(--dark);
	border-radius: 6px;
	color: var(--light);
	cursor: pointer;
	display: flex;
	margin: 2rem 0;
	padding: 4px;

	* {
		cursor: text;
	}

	button {
		cursor: pointer;
	}

	label {
		display: flex;
		flex: 1 1 100%;
		flex-direction: column-reverse;
		height: 4.6rem;
		justify-content: space-between;
		padding: 4px;
	}

	label * {
		transition: all 0.4s ease;
	}

	input {
		background: transparent;
		border: none;
		color: inherit;
		outline: none !important;
		width: 100%;
	}

	input[value='']:not(:focus) {
		font-size: 1rem;
	}

	input::placeholder {
		color: inherit;
		opacity: 0.6;
	}

	input:focus {
		border: none;
	}

	input:focus::placeholder {
		opacity: 1;
	}

	input:not([value='']) + span,
	input:focus + span {
		font-size: 1rem;
	}
`

const fields = [
	{
		label: 'Email',
		name: 'email',
		placeholder: 'your@email.com',
	},
]

const onSubmit = fieldState =>
	fetch('/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: encode({
			'form-name': 'newsletter',
			...Object.fromEntries(fieldState),
		}),
	})

const NewsletterSignup = () => (
	<Form
		fields={fields}
		name="newsletter"
		onSubmit={onSubmit}
		form={([{ label, ...emailProps }], onSubmit) => (
			<NewsletterForm>
				<label>
					<input {...emailProps} type="email" />
					<span>{label}</span>
				</label>
				<StyledLink
					disabled={!emailProps.value.length}
					as="button"
					onClick={onSubmit}
					colour="var(--dark)"
					margin="0"
					button
				>
					Subscribe
				</StyledLink>
			</NewsletterForm>
		)}
		headline={
			<>
				<H3>Want more?</H3>
				<p>
					Subscribe to get my latest content via email. I won’t send
					you spam, and you can unsubscribe at any time.
				</p>
			</>
		}
		submitting={<H3>Subscribing...</H3>}
		success={
			<>
				<H3>Success!</H3>
				<p>
					Thanks for signing up! Remember, you can unsubscribe at any
					time.
				</p>
			</>
		}
	/>
)

export default NewsletterSignup

import React from 'react'
import styled from 'styled-components'

import { Form } from 'src/components'

const NewsletterStyles = styled.div`
	--background: var(--source);
	--primary: var(--dark);
	--secondary: var(--secondary-dark);
`

function encode(data) {
	return Object.keys(data)
		.map(
			key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		)
		.join('&')
}

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
	<NewsletterStyles>
		<Form
			fields={fields}
			name="newsletter"
			onSubmit={onSubmit}
			headline={
				<>
					<h3>Want more?</h3>
					<p>
						Subscribe to get my latest content via email. I won’t
						send you spam, and you can unsubscribe at any time.
					</p>
				</>
			}
			submitting={<h3>Subscribing...</h3>}
			success={
				<>
					<h3>Success!</h3>
					<p>
						Thanks for signing up! Remember, you can unsubscribe at
						any time.
					</p>
				</>
			}
		/>
	</NewsletterStyles>
)

export default NewsletterSignup

import React from 'react'

import { StyledLink } from 'src/components'
import Input from './Input'

const NONE = 'NONE'
const SUBMITTING = 'SUBMITTING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

const Form = ({
	error,
	fields,
	form,
	headline,
	onSubmit,
	submitting,
	success,
	...props
}) => {
	const [status, setStatus] = React.useState(NONE)
	const fieldState = fields.map(field => {
		const [value, setState] = React.useState(field.defaultValue || '')
		const onChange = e => setState(e.target.value)

		return { ...field, value, onChange }
	})

	const onSubmitCallback = () => {
		setStatus(SUBMITTING)
		onSubmit(fieldState.map(field => [field.name, field.value]))
			.then(() => setStatus(SUCCESS))
			.catch(() => setStatus(ERROR))
	}

	switch (status) {
		case SUBMITTING:
			return submitting || <p>Submitting...</p>

		case SUCCESS:
			return success || <p>Success!</p>

		case ERROR:
			return (
				<>
					{error || (
						<>
							<h3>Something went wrong</h3>
							<p>
								If this error keeps on happening, please let me
								know!
							</p>
						</>
					)}
					<p>
						<StyledLink onClick={() => setStatus(NONE)} button>
							Click here to try again
						</StyledLink>
					</p>
				</>
			)

		default:
			return (
				<form
					method="post"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={onSubmitCallback}
					{...props}
				>
					{headline}
					<Input
						hidden
						label="If you're not a robot, leave this field blank!"
						name="bot-field"
					/>
					{form(fieldState, onSubmitCallback)}
				</form>
			)
	}
}

const renderForm = (fieldState, onSubmit) => (
	<>
		{fieldState.map(field => (
			<Input key={field.name} {...field} />
		))}
		<p>
			<StyledLink as="button" onClick={onSubmit} button>
				Submit
			</StyledLink>
		</p>
	</>
)

Form.defaultProps = {
	form: renderForm,
}

Form.Input = Input

export default Form

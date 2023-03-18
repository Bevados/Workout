import { useForm } from 'react-hook-form'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

const Auth = () => {
	const { register, handleSubmit } = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<Layout bgImage='/images/auth-bg.png' heading='Sign in'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter email'
						{...register('email', {
							required: 'Email is required'
						})}
					/>
					<Button text="Let's go" />
				</form>
			</div>
		</Layout>
	)
}

export default Auth

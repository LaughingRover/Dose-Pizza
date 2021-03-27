import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import StyledInput from '../../components/common/input/StyledInput'
import { StyledButton } from '../../components/common/button/Button'
import StyledCheckbox from '../../components/common/checkbox/Checkbox'
// import { LoginHeader } from '../../layout/Header'
import { Colors } from '../../utils/Colors'
import { AuthContext } from '../../context/AuthContext'


const Main = styled.main`
	width: 1280px;
  min-width: 1280px;
  margin: 2rem auto;
	display: flex;
	justify-content: center;
  .row {
		width: 15rem;
    display: flex;
    align-items: center;
		margin-top: 2rem;
		justify-content: space-between;
	}
	.column {
		display: flex;
		flex-direction: column;
		width: 20rem;
		height: 5.5rem;
		justify-content: space-between;
	}
	.divider {
		margin-top: 1rem;
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	hr {
		width: 3.2rem;
		border: 1px solid ;
		background: ${Colors.grey_background};
	}
`


const SignIn = () => {
	const [_, setIsLoggedIn] = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({username, password})
		if (username === 'Joseph' && password === 'password') {
			setIsLoggedIn(true)
			history.push('/dashboard')
		} else {
			history.push('/signin')
		}
	}

	return (
		<>
			{/* <LoginHeader /> */}

			<Main>
				<form onSubmit={handleSubmit} >
					<h1>Sign In</h1>
					<p>New User? <a href="/">Create an account</a></p>

					<div className='column'>
						<StyledInput
							type='text'
							name='username'
							id='username'
							placeholder="Username or email"
							value={username}
							onChange={(e) => setUsername(e.target.value)} />

						<StyledInput
							type='password'
							name='password'
							id='password'
							placeholder='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div>
						<StyledCheckbox /><label>Keep me signed in</label>
					</div>

					<StyledButton type='submit' className='center' primary>SIGN IN</StyledButton>

					<div className="divider">
						<hr />
						<p> Or Sign In With </p>
						<hr />
					</div>
					<div className='row center'>
						<StyledButton >Google</StyledButton>
						<StyledButton >Facebook</StyledButton>
					</div>

				</form>

			</Main>
		</>
	)

}; export default SignIn
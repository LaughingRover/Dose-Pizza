import Logo from '../components/common/logo/Logo'
import { NavLink } from 'react-router-dom'

export const LoginHeader = () => {

	return (
		<div>
			<NavLink to='/' ><Logo /></NavLink>
			<NavLink to='/signin' >SIGN IN</NavLink>
		</div>
	)
};
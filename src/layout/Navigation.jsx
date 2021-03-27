import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Nav = () => {
	const [isLoggedIn, _] = useContext(AuthContext)

	return (
			<nav>
				<NavLink to='/' >Home</NavLink>
				<NavLink to='/exhibition' >Exhibition</NavLink>
				{isLoggedIn && <NavLink to='/dashboard' >Dashboard</NavLink>}
				{isLoggedIn ? <NavLink to='/signin' >logout</NavLink> : <NavLink to='/signin' >SignIn</NavLink>}
			</nav>
	)
}
import React, { useState, createContext } from 'react'

// Create a global auth store(central store)
export const AuthContext = createContext()

// Auth provider serves the state to any component
// accesses it
const AuthProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return  (
		<AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]} >
			{props.children}
		</AuthContext.Provider>
	)
}; export default AuthProvider
import React from 'react'
import Login from './Login'
import { AuthContext } from './AuthContextProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const x = React.useContext(AuthContext)
    const { isAuth, toggleAuth } = x
    return (
        <div className='parent'>
            <Link to={isAuth ? "/books" : "/login"}>{isAuth ? "books" : "login"}</Link>
        </div>
    )
}
export default Navbar

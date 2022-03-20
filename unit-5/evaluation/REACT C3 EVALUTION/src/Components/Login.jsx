import React from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const x = React.useContext(AuthContext)
    const { isAuth, toggleAuth } = x
    const navigate = useNavigate()
    const [input, setInput] = React.useState({ email: "", password: "" })
    const handleChangeinput = (e) => {
        const { value, name } = e.target
        const payload = {
            ...input, [name]: value
        }
        setInput(payload)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://reqres.in/api/login", input).then((res) => {
            // console.log(res)
            toggleAuth()
            navigate("/");
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter email' type="text" name="email" onChange={handleChangeinput} />
                <input placeholder='enter password' type="text" name="password" onChange={handleChangeinput} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default Login

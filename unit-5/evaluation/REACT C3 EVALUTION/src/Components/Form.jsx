import axios from 'axios'
import React from 'react'
const Form = () => {
    const [input, setInput] = React.useState({ title: "", author: "" })
    const [data, setData] = React.useState([])
    const handleChangeinput = (e) => {
        const { value, name } = e.target
        const payload = {
            ...input, [name]: value
        }
        setInput(payload)
    }
    React.useEffect(() => {
        getData()
    }, [])
    function getData() {
        axios.get("http://localhost:3000/books").then((data) => {
            setData(data.data)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/books", input).then(() => {
            getData()
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter title' type="text" name="title" onChange={handleChangeinput} />
                <input placeholder='enter author' type="text" name="author" onChange={handleChangeinput} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default Form

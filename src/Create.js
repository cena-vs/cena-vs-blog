import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Footer from './Footer'

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Please Select an Author')
    const [isLoading,setIsLoading] = useState(false)
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title,body,author}
        setIsLoading(true)

        fetch('http://localhost:8001/blogs',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log("New Blog Added");
            setIsLoading(false)
            history.push('/')
        })
    }
    return ( 
        <>
        <div className="create">
            <h2>Add a  New Blog</h2>
            <form>
                <label htmlFor="">Blog Title: </label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <small className='error-msg'>Title is Required<sup>*</sup></small><br/>
                <label htmlFor="">Blog Body: </label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <small className='error-msg'>Body is Required<sup>*</sup></small><br/>
                <label htmlFor="">Blog Author: </label>
                <select 
                value = {author}
                onChange = {(e)=>setAuthor(e.target.value)}>
                    <option value="Please Select an Author">Please Select an Author</option>
                    <option value="Cena Vs">Cena Vs</option>
                    <option value="Saravana">Saravana</option>
                    <option value="JO">Jo</option>
                </select>
                <small className='error-msg'>Author is Required<sup>*</sup></small><br/>
                { !isLoading && <button onClick={handleSubmit}>Add Blog</button>}
                { isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
        <Footer />
        </>
     );
}
 
export default Create;
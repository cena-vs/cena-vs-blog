import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom'
import Footer from './Footer'

const BlogDetail = () => {

    const {id} = useParams()
    const { data:blog,error,isLoading } = useFetch('http://localhost:8001/blogs/' +id)
    const history = useHistory()

    const handleDelete = ()=>{
        fetch('http://localhost:8001/blogs/' +id,{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(()=>{
            history.push('/')
        })
    }
    return ( 
        <>
        <div className="blog-details">
        {isLoading && <div>Loading...</div>}
                {error && <div> {error} </div>}
                { blog && (<article>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                        <div>{blog.body}</div>
                        <button className='delete-blog-btn' onClick={handleDelete}>Delete Blog</button>
                    </article>
                )}
        </div>
        <Footer />
        </>
     );
}

export default BlogDetail;
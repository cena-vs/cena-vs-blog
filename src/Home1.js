import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs,setBlogs] = useState(null)
    const[isLoading,setIsLoading] = useState(true)
    const[error,setError] = useState(null)

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    useEffect(()=>
        {
            fetch('http://localhost:3004/blogs')
                .then(res=>{
                    if(!res.ok){
                        throw Error('Something, Went Wrong Please Try Again Later :)')
                    }
                    return res.json();
                })
                .then(data=>{
                    setBlogs(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err)=>{
                    console.log(err.message);
                    setError(err.message)
                    setIsLoading(false)
                })
        },[]);

    // Fetching Data after Few Seconds Using SetTimeOut function Example
        // useEffect(()=>
        // {
        //     setTimeout(()=>{
        //         fetch('http://localhost:8000/blogs')
        //     .then(res=>{
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setBlogs(data)
        //         setIsLoading(false)
        //     })
        //     },5000)
        // },[]);
    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {error && <div> {error} </div>}
            { blogs && <BlogList blogs={blogs} title = 'All Blogs!' 
            // handleDelete={handleDelete}
             />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Cena Vs')} title = 'Cena Vs Blogs!' /> */}
        </div>
     );
}
 
export default Home;


// When we are using json server, each top level property is considered as "RESOURCE". We have one top level resource.(ie:blogs) and it creates endpoints for us to interact with this resource.so we can do things like add items,delete items and edit items...

// EndPoints

// /blogs GET Fetch all Blogs
// /blogs/{id} GET Fetch a single blogs
// /blogs POST Add a New Blogs
// /blogs/{id} GET Delete a Blog
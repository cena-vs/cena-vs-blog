import BlogList from './BlogList'
import Footer from './Footer';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs,isLoading,error } = useFetch('http://localhost:8001/blogs');
    
    return ( 
        <>
            <div className="home">
                {isLoading && <div>Loading...</div>}
                {error && <div> {error} </div>}
                { blogs && <BlogList blogs={blogs} title = 'All Blogs!' 
                />}
            </div>
            <Footer />
        </>
     );
}
 
export default Home;


// When we are using json server, each top level property is considered as "RESOURCE". We have one top level resource.(ie:blogs) and it creates endpoints for us to interact with this resource.so we can do things like add items,delete items and edit items...

// EndPoints

// /blogs GET Fetch all Blogs
// /blogs/{id} GET Fetch a single blogs
// /blogs POST Add a New Blogs
// /blogs/{id} GET Delete a Blog
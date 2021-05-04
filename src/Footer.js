import {Link} from 'react-router-dom'


const Footer = () => {
    return (  
        <nav className="footer">
            <p>© 2021 Cena Vs Blog, LLC. All Rights Reserved.</p>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Footer;
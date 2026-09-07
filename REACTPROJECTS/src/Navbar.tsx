import React from 'react';
import {Link} from 'react-router-dom';
const Navbar =  ()=>{
    return(
       <nav>
           <h2 className='logo'>📘MyBlog</h2>
           
         <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AboutPage">AboutPage</Link>
            </li>
            <li>
                <Link to="/ArticleList">ArticleList</Link>
            </li>
         </ul>
        </nav>   
    );
};
export default Navbar;
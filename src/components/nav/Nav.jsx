import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <h1>My Life</h1>
        <Link to='/'>Home</Link>
        <Link to = '/blog'>Blog</Link>
        </>
    );
}

export default Nav;
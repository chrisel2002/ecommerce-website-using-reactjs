import { Link } from "react-router-dom"

export default function Navbar() {
  const path = window.location.pathname
    return (
    <nav className="nav">
        <Link to="/home" className="site-title">
            CROCS
        </Link>
        <ul>
        <CustomLink to="/home" >Home</CustomLink> 
            <CustomLink to="/" >Signup</CustomLink> 
            <CustomLink to="/wishlist" >Wishlist</CustomLink> 
            <CustomLink to="/cart">Cart</CustomLink>
            
                
        </ul>
    </nav>
    )
}

function CustomLink({ to,children, ...props }){
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}
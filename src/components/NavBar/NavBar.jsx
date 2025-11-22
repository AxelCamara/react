import logo from "../../assets/img/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar =() => {

return(
    <nav className="navbar">
        <Link to="/">
        <img src={logo} className="logo"  alt="" />
        </Link>
        
        <ul className="categorias"> 
            <li>
                <Link to="/category/iphone" className="a">Iphone</Link>
            </li>
            <li>
                <Link to="/category/samsung" className="a">Samsung</Link>
            </li>
            <li>
                <Link to="/category/perifericos" className="a">Perifericos</Link>
            </li>
        </ul>

        <CartWidget />
    </nav>
)
}

export default NavBar;

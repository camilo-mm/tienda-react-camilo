import Preheader from "./Preheader"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <Preheader textPreheader={"ENVÍO GRATIS POR COMPRAS SUPERIORES A $150.000"} />
    
    <nav className="navbar-cmm navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="menu-access navbar-nav">
                <li>
                <Link to={`/category/3`} >Mujer</Link>
                </li>
                <li>
                <Link to={`/category/2`} >Hombre</Link>
                </li>
                <li>
                <Link to={`/category/1`} >Niña</Link>
                </li>
                <li>
                <Link to={`/category/4`} >Niño</Link>
                </li>
                <li>
                <Link to={`/`} >Ver todo</Link>
                </li>
            </ul>
        </div>

        <div className="logo-tns-tm">
            <Link to='/'><img src="/assets/img/logo-tennis.png" alt=""/></Link>
        </div>
        <ul className="top-access">
             <li><a href="#"><span className="icon-search"></span></a></li>
            <li><a href="#"><span className="icon-bookmark"></span></a></li>
            <CartWidget />
        </ul>
    </nav>
    </>
    
  )
}

export default NavBar

import Preheader from "./Preheader"
import ButtonNav from "./ButtonNav"
import CartWidget from "./CartWidget"

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
                <ButtonNav linkBtn={"#"} textBtn={"Mujer"} />
                <ButtonNav linkBtn={"#"} textBtn={"hombre"} />
                <ButtonNav linkBtn={"#"} textBtn={"niño"} />
                <ButtonNav linkBtn={"#"} textBtn={"niña"} />
                <ButtonNav linkBtn={"#"} textBtn={"Ver todo"} />
            </ul>
        </div>

        <div className="logo-tns-tm">
            <a href="#"><img src="./src/assets/logo-tennis.png" alt=""/></a>
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

import { Link } from "react-router-dom"

const CardProduct = ({prod}) => {
  return (
    <div className="item-carousel">
        <img src={prod.img} alt={prod.name} />
        <h3>{prod.name}</h3>
        <p className="brand">Tennis</p>
        <div className="item-price">
            <p className="discount">50%</p>
            <p className="new-price">$70.000</p>
            <p className="old-price">$140.000</p>
        </div>
        <div className="item-sizes">
            <a href="#">XS</a>
            <a href="#">S</a>
            <a href="#">M</a>
            <a href="#">L</a>
            <a href="#">XL</a>
        </div>
        <div className="call-to-action">
          <Link className="btn-primary-fill" to={`/detail/${prod.id}`} >Ver detalle del producto</Link>
            <a className="btn-primary-square" href="#">Comprar ahora</a>
        </div>
    </div>
  )
}

export default CardProduct

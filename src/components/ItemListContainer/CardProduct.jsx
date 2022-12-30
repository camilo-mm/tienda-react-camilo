import { Link } from "react-router-dom"

const CardProduct = ({prod}) => {
  return (
    <div className="item-carousel">
        <img src={prod.img} alt={prod.name} />
        <h3>{prod.name}</h3>
        <p className="brand">{prod.brand}</p>
        <div className="item-price">
            <p className="new-price">${prod.price}</p>
        </div>
        <div className="call-to-action">
          <Link className="btn-primary-fill" to={`/detail/${prod.id}`} >Ver detalle del producto</Link>
        </div>
    </div>
  )
}

export default CardProduct

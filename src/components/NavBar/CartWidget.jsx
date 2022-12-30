import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"




const CartWidget = () => {
  const {totalItemsOnCart} = useCartContext()
  return (
    <li>
      <Link to={`/cart`} >
          <span className="icon-cart"></span>
          <span id="countCart">{totalItemsOnCart()>=1 ? totalItemsOnCart() : ""}</span>
      </Link>
    </li>
  )
}

export default CartWidget

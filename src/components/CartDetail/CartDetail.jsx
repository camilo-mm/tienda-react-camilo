import { useCartContext } from "../../context/CartContext"
import {Link} from "react-router-dom"
import Form from "./Form"

const CartDetail = () => {
    const {cartList, clearCart, valueTotal} = useCartContext()
    const renderCart = () =>{
        if(cartList.length >= 1){
            return  <div id="carritoGrid">
            <h1>Resumen de compras</h1>
            <div className="resumen-carrito-products">
                <div className="prodcutos-agregados">
                <div className="product-cart">
                    <div className="col-1-img-name">
                        <div className="name-brand">
                            <h3>Producto</h3>
                        </div>
                    </div>
                    <div className="col-2-price">
                        <p className="new-price"><strong>Precio unitario</strong></p>
                    </div>
                    <div className="col-3-cantidad">
                        <p><strong>Cantidad</strong></p>
                    </div>
                    <div className="col-4-total">
                        <p><strong>Subtotal</strong></p>
                    </div>
                </div>

        {
        cartList.map(prod => 
                            <div key={prod.id} className="product-cart">
                                <div className="col-1-img-name">
                                    <img src={prod.img} alt={prod.name} />
                                    <div className="name-brand">
                                        <h3>Buzo azul claro para hombre</h3>
                                        <p className="brand">Topmark</p>
                                    </div>
                                </div>
                                <div className="col-2-price">
                                    <p className="new-price">${prod.price}</p>
                                </div>
                                <div className="col-3-cantidad">
                                    <p>{prod.quantity}</p>
                                </div>
                                <div className="col-4-total">
                                    <p><strong>${prod.price*prod.quantity}</strong></p>
                                </div>
                            </div>
                        
                        )}
                            <h2>Precio total ${valueTotal()}</h2>  
                            <div className="vaciarcarrito">
                                <button onClick={clearCart}>Vaciar</button>
                            </div>  
                </div>
            </div>

           <Form />

        </div>
            
        } else {
            return <div className="productoNoEncontrado">
                    <h2>El carrito está vacío</h2>
                    <Link className="btn-primary-fill noEncontrado" to={`/`} >Ver productos</Link>
                </div>
            
        }
    }

    return (
        renderCart()
    )
}

export default CartDetail
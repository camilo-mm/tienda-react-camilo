import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useState, useEffect } from "react"
import {useParams, Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const ItemDetailContainer = () => {
    
    const [unitsToAdd, setUnitsToAdd] = useState(1)
    const {cartList, addToCart} = useCartContext()
    const {productId} = useParams()
    const [product, setProduct]= useState([])
    const [loading, setLoading] = useState(true)
    
    
    
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
        .then(resp => setProduct({id: resp.id, ...resp.data() }))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    

    
    const lessUnits = () => {
        if(unitsToAdd > 1){
            setUnitsToAdd (unitsToAdd-1)
        }
    }
    const plusUnits = ()=>  {
        if(unitsToAdd < product.stock){
            setUnitsToAdd (unitsToAdd+1) 
        }
    }

    const onAdd = (quantity) => {
        addToCart({...product, quantity})
    }

    const renderProduct = () =>{
        if(product.name){
            return <div id="productDetailGrid">
                        <section className="picture-product">
                            <img src={product.img} alt={product.name} />  
                        </section> 
                        <section className="product-description">
                            <h2>{product.name}</h2>
                            <p className="brand">{product.brand}</p>
                            <div className="item-price">
                                <p className="new-price">${product.price}</p>
                            </div>
                            <p>{product.description}</p>
                            <div className="call-to-action">
                                <button className="buttonAddUnits" onClick={lessUnits}>-</button>
                                <p className="countUnits">{unitsToAdd}</p>
                                <button className="buttonAddUnits plusUnits" onClick={plusUnits}>+</button>
                                <button className="btn-primary-fill" onClick={()=> onAdd(unitsToAdd)}>ADD TO CART</button>
                            </div>
                        </section>
                    </div>
        }else{
            return <div className="productoNoEncontrado">
                <h2>El producto buscado no existe</h2>
                <Link className="btn-primary-fill noEncontrado" to={`/`} >Ver productos</Link>
            </div>
        }
    }

  return (
    <>
        <div className="prodcutDetail">
            { 
                loading ? <h2>cargando</h2> :
                renderProduct()
            }

        </div>
    </>
  )
}

export default ItemDetailContainer


import { gfetch } from "../../helpers/gfetch"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        gfetch()
        .then(data => setProduct(data.find((product)=> product.id == productId)))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
      }, [])
      //console.log(products)

      const[unitsToAdd, setUnitsToAdd] = useState(1)
  return (
    <>
        <div className="prodcutDetail">
            { 
                loading ? <h2>cargando</h2> : 
                <div key={product.id}>
                    <img src={product.img} alt={product.name} />  
                    <p>Nombre: {product.name}</p>
                    <p>category: {product.category}</p>
                    <button onClick={()=> setUnitsToAdd((unitsToAdd) => {
                        let newUnits = unitsToAdd -1 
                        if(newUnits <= 0){
                            return 1
                        }else{
                            return newUnits
                        }
                    } )}>-</button>
                    <p>{unitsToAdd}</p>
                    <button onClick={()=> setUnitsToAdd((unitsToAdd) => {
                        let newUnits = unitsToAdd +1 
                        if(newUnits >= product.stock){
                            return product.stock
                        }else{
                            return newUnits
                        }
                    } )}>+</button>
                    <button onClick={()=>console.log(`agregaste ${unitsToAdd} del producto ${product.name}`)}>ADD TO CART</button>
                </div>
                
            }
            
        </div>
    </>
  )
}

export default ItemDetailContainer


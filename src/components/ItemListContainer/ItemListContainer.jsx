import { gfetch } from "../../helpers/gfetch"
import { useState, useEffect } from "react"
import CardProduct from "./cardProduct"
import {useParams} from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const {category} = useParams()
  const [products, setProducts]= useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(category){
      gfetch()
      .then(data => setProducts(data.filter(prod=> prod.categoryId == category)))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false))
    }else{
      gfetch()
      .then(data => setProducts(data))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false))
    }
    
  }, [category])
  console.log(products)

  
  
  return (
    <>
      <div className="saludo">
        <h2>{greeting}</h2>
      </div>
      <section className="vitrine">
            <div className="title" id="botonesCategorias">
                <h2>Productos</h2>
                <a className="btn-secondary" href="#" id="vertodo">Ver todo</a>
            </div>
            <div className="carousel" id="products">
              { loading ? <h2>cargando</h2> :
              products.map((product) =>
                <CardProduct prod={product} key={product.id}/>
              )}
            </div>
        </section>
    </>
    
  )
}

export default ItemListContainer

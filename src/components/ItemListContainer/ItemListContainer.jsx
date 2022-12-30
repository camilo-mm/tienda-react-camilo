import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import { useState, useEffect } from "react"
import CardProduct from "./cardProduct"
import {useParams} from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const {category} = useParams()
  const [products, setProducts]= useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
 
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryFilter = category ? query(queryCollection, where('categoryId','==', category)) : queryCollection
    getDocs(queryFilter)
    .then(data => setProducts( data.docs.map( product =>( {id: product.id, ...product.data()} ) ) ))
    .catch(err=>console.log(err))
    .finally(()=> setLoading(false))
    

    
  }, [category])
  
  return (
    <>
      <div className="saludo">
        <h2>{greeting}</h2>
      </div>
      <section className="vitrine">
            <div className="title" id="botonesCategorias">
                <h2>Productos</h2>
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

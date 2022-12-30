import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'

const Form = () =>{
    const [ dataForm, setDataForm ] =  useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        confirmEmail: ''
      })
    const [orderTrx, setOrderTrx] = useState({})
    const {cartList, valueTotal, clearCart} = useCartContext()
    
    const handleOnChange = (e) => {
        setDataForm( {
          ...dataForm,
          [e.target.name]: e.target.value
        } )
    }

    const createOrder = (e) => {
        e.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.price = valueTotal()
        order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        
        addDoc(queryCollection, order)
        .then(resp => Swal.fire({
            title: 'Compra realizada con éxito!',
            text: `Tu orden de compra es la número: ${resp.id}`,
            icon: 'success',
            confirmButtonText: 'Cerrar'
            }))
        .catch(err => console.log(err))
        .finally(()=> clearCart())
      }

    return (
        <div className="resumen-carrito-amount">
            <h3>Completa la siguiente información para terminar la compra</h3>

            <form onSubmit={createOrder}>
                <div className="bloqueinputs">
                    <input className="inputForm" type="text" placeholder="Nombre" onChange={handleOnChange} name='name' value={dataForm.name}/>
                    <input className="inputForm" type="text" placeholder="Apellido" onChange={handleOnChange} name='lastname' value={dataForm.lastname} />
                    <input className="inputForm" type="number" placeholder="Teléfono" onChange={handleOnChange} name='phone' value={dataForm.phone} />
                </div>
                <div className="bloqueemails">
                <input className="inputForm" type="email" placeholder="Correo electrónico" onChange={handleOnChange} name='email' value={dataForm.email} />
                <input className="inputForm" type="email" placeholder="Confirma tu correo electrónico" onChange={handleOnChange} name='confirmEmail' value={dataForm.confirmEmail} />
                </div>
                
                {
                    dataForm.email !== dataForm.confirmEmail || dataForm.name == "" || dataForm.lastname == "" || dataForm.phone == "" || dataForm.email == "" || dataForm.confirmEmail == ""
                    ?
                    <button className="buttonSend submitDisable" type="submit" disabled>Finalizar compra</button>
                    : 
                    <button className="buttonSend submitok" type="submit" >Finalizar compra</button>
                }
                
            </form>

        </div>
    )
}

export default Form

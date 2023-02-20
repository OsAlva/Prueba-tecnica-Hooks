import { createContext,useState,useReducer } from "react";
import {cartReducer, cartInitialState} from '../reducers/cart.js'

//1.Crear el contexto y luego este es el contexto que tenemos que consumir    
export const CartContext = createContext();


function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState )

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({type:'CLEAR_CART'})

    return {state, addToCart, removeFromCart, clearCart}
}


//2.Crear el Provider, para proveer el contenido(este envuelve a la aplicacion) y este a la vez nos provee el acceso al contexto
//children -> todo lo que envuelve
export function CartProvider({children}){

    const {state, addToCart, removeFromCart, clearCart} = useCartReducer()
    // const [cart,setCart] =  useState([])

//     const addToCart = product => {
//         //check if the product is already in the cart
//          const productInCartIndex = cart.findIndex((item) => item.id === product.id)

//         if(productInCartIndex > -1){
//             //una forma seria usando structuredClone
//             const newCart = structuredClone(cart)
//             newCart[productInCartIndex].quantity += 1
//             return setCart(newCart)
//         }

//         //product no esta en el carrito
//         setCart(prevState => ([
//             ...prevState,
//             {
//                 ...product,
//                 quantity: 1
//             }
//         ]))
//     }

//     const removeFromCart = product => {
//         setCart(prevState => prevState.filter(item => item.id !== product.id))
//     }

//     const clearCart = () => {
//         //limpiamos el carrito
//         setCart([])
//     }


    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
        {children}
        </CartContext.Provider>
    )
}

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    cartModal:false,
    total:0

  };

  const Totalcartvalue = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + (item.price * (item.quantity)), 0);
};


export const CartPageSlice = createSlice({
    name:'cartpage',
    initialState,
    reducers:{
        AddToCart:(state, action)=>{
            const updatedItem = { ...action.payload, quantity: 1 };
           state.cartItems.push(updatedItem)
           state.total = Totalcartvalue(state.cartItems);
        },
        RemoveFromCart:(state,action)=>{
            let id = action.payload
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id);
            state.total = Totalcartvalue(state.cartItems);
        },
        ToggleCartPage:(state)=>{
            console.log(state.cartModal)
            state.cartModal = !state.cartModal;
            console.log(state.cartModal)
        },
        IncreaseQuantity:(state,action)=>{
            const id = action.payload
            console.log(id)
            state.cartItems =  state.cartItems.map(cartItem=>
                cartItem.id === id  ? {...cartItem, quantity: cartItem.quantity+1}  : cartItem )
                state.total = Totalcartvalue(state.cartItems);
        },
        DecreaseQuantity:(state,action)=>{
            const id = action.payload
            state.cartItems =  state.cartItems.map(cartItem=>
                cartItem.id === id && cartItem.quantity > 1 ? {...cartItem, quantity: cartItem.quantity-1}  : cartItem )
                state.total = Totalcartvalue(state.cartItems);
        }
    }
})

export const {AddToCart,RemoveFromCart,ToggleCartPage,IncreaseQuantity,DecreaseQuantity,cartModal, cartItems,total} = CartPageSlice.actions

export default CartPageSlice.reducer
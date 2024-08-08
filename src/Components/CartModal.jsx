import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';
import Table from 'react-bootstrap/Table';
import { AddToCart,RemoveFromCart,ToggleCartPage,IncreaseQuantity,DecreaseQuantity,total } from '../Redux/CartPageSlice';


function CartModal() {
    const dispatch = useDispatch()
    const cartitems = useSelector((state)=> state.cartpage.cartItems)
    const cartModal = useSelector((state)=> state.cartpage.cartModal)
    const total = useSelector((state)=> state.cartpage.total)

    console.log(cartitems.length)
 
    

    const toggleCartPage = ()=>{
        dispatch(ToggleCartPage())
    }
    const decreaseQuantity = (id)=>{
        dispatch(DecreaseQuantity(id))
    }
    const increaseQuantity = (id)=>{
        dispatch(IncreaseQuantity(id))
    }
    const removeFromCart = (id)=>{
        dispatch(RemoveFromCart(id))
    }


  return<>
    <div className={`cartmodal-div ${cartModal ? 'show' : ''}`} >
            <Button size='lg' onClick={toggleCartPage} variant="dark"> <i className="bi bi-arrow-left"></i> &nbsp; Back to Shop more!!</Button>
            <div><br /><br />
{console.log(cartitems)}
                {
                    cartitems.length === 0 ? (<h3 style={{ textAlign: 'center' }}>Your Cart is Empty!</h3>) : (<>
                        <h2 style={{ textAlign: 'center'}}>Cart Items</h2><br />
                        <Table striped bordered hover className='Maintable'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Item Name</th>
                                    <th>Price per unit</th>
                                    <th>Qty</th>
                                    <th>Total price</th>
                                    <th>Delete Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartitems.map((item, i) => (
                                        <tr key={item.id}>
                                            <td>{1 + i++}</td>
                                            <td style={{ textAlign: 'start' }}>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='quantity-row' >
                                                <Button onClick={() => decreaseQuantity(item.id)} style={{ width: '30px', height: '40px' }} size='sm'><i className="bi bi-dash"></i></Button> &nbsp;&nbsp;
                                                &nbsp;&nbsp;<p className='text-center'>{item.quantity}</p> &nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button onClick={() => increaseQuantity(item.id)} style={{ width: '30px', height: '40px' }} size='sm'><i className="bi bi-plus"></i></Button>
                                            </td>
                                            <td>${item.price * item.quantity}</td>
                                            <td><Button style={{ width: '9rem' }} variant="outline-danger" onClick={() => removeFromCart(item.id)} >Remove Item</Button> </td>
                                        </tr>

                                    ))
                                }


                            </tbody>
                        </Table>



                    </>
                    )



                }
            </div>
            <div>
                {
                    cartitems.length === 0 ? '' :

                        <Table striped bordered hover style={{ width: '50%' }} className='FinalTable' >
                            <thead>
                                <tr>

                                    <th>Total Price</th>
                                    <td>${total}</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Shipping Charges</td>
                                    <td>Free</td>

                                </tr>
                                <tr>
                                    <td>Payment Value</td>
                                    <th>${total}</th>
                                </tr>

                            </tbody>
                        </Table>}
                <br />

                {cartitems.length === 0 ? '' :
                    <div className='text-center'><Button disabled size='md' style={{ width: '50%' }}>CheckOut (Disabled)</Button></div>}
            </div>
        </div>
  </>
}

export default CartModal
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { AddToCart,RemoveFromCart,cartItems } from '../Redux/CartPageSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';





function Cards({data}) {

const dispatch = useDispatch();


const cartitems = useSelector((state)=> state.cartpage.cartItems)
const isItemInCart = cartitems.some(item=> item.id === data.id)


 const startcartprocess = (data) =>{
  console.log('Add process called')
  console.log(data)
  dispatch(AddToCart(data))

  }

  const removecartprocess = (id) => {
    console.log(id)
    console.log('remove process called')
    dispatch(RemoveFromCart(id))

  }

  return <>
    <div className='cardstyle' >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.images[1]} alt={data.description} className='cardimage' />
        <Card.Body>
          <Card.Title className='cardtitle' >{data.title}</Card.Title>

          <Card.Text className='itemprice'>
            ${data.price}
          </Card.Text>
          <div className='btn'>
            {isItemInCart  ? <Button variant="dark" onClick={() => removecartprocess(data.id)} >Remove from Cart</Button>
               :
<Button variant="success" onClick={() => startcartprocess(data)
               
              }  >Add to Cart</Button>
              
            }
          </div>
        </Card.Body>
      </Card>
    </div>



 
  </>
}

export default Cards
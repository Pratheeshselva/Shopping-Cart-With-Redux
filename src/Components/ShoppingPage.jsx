import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Products } from '../Redux/ShoppingPageSlice';
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
import '../index.css'
import { ToggleCartPage } from '../Redux/CartPageSlice';


function ShoppingPage() {
    const dispatch = useDispatch();
    const products = useSelector(Products);
    console.log(products)

    const toggleCartPage = ()=>{
        console.log('cart page called')
        dispatch(ToggleCartPage())
    }

  return <>
  <div className='shopping-page'>
  {
    products.map((item)=>(
      <Cards data={item} key={item.id} />
    ))
   
  }
 
  <div style={{position:'fixed', zIndex:'999',bottom:'50%', right:'10px' }}>
   
  <Button className='secondary' variant="outline-success" onClick={toggleCartPage} >Check Out</Button>

  </div>


  </div>
  </>
}

export default ShoppingPage
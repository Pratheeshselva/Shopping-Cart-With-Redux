import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingPage from './Components/ShoppingPage';
import CartModal from './Components/CartModal';





function App() {

  


  return <>
    <div id='content'>

    <ShoppingPage  />
    <CartModal />

    </div>
  </>
}

export default App
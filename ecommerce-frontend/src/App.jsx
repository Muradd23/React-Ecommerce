import { HomePage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/Orders/OrdersPage'
import { TrackingPage } from './Pages/tracking/TrackingPage'
import { Routes,Route } from 'react-router'
import './App.css'
import axios from 'axios'
import { useEffect,useState } from 'react'

function App() {
       const loadCart = async ()=>{
          const response = await axios.get('api/cart-items?expand=product')
          setCart(response.data)
        }

      const [cart,setCart] = useState([])
      useEffect(()=>{
       
       loadCart()
       
      },[])
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path='orders' element={<OrdersPage cart={cart} loadCart={loadCart}/>}></Route>
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>}></Route>
    </Routes>
  )
}

export default App

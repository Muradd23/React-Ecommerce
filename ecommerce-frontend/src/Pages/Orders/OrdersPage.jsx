import './OrdersPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header.jsx'

import { OrderHeader } from './OrderHeader.jsx'
import { OrderDetailsGrid } from './OrderDetailsGrid.jsx'
export function OrdersPage({ cart,loadCart }) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrdersData = async ()=>{
            const response = await  axios.get('/api/orders?expand=products')
            setOrders(response.data)
    
        }
        fetchOrdersData()

    }, [])
    console.log('ORDERS');

    console.log(orders);
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => {
                        return (
                            <>
                                <div key={order.id} className="order-container">

                                    <OrderHeader order={order}/>
                                    <OrderDetailsGrid order={order} loadCart={loadCart} />

                                </div>

                            </>
                        )
                    })}


                    
                </div>
            </div>

        </>
    )
}
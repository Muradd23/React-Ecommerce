import { CheckoutHeader } from './CheckoutHeader'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CheckoutPage.css'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'
export function CheckoutPage({ cart,loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {
        const fetchDeliveryData = async ()=>{
            let response = await  axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)
        }
       
        fetchDeliveryData()
        
    }, [])
    useEffect(()=>{
        const fetchPaymentData = async()=>{
            let response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        }
        fetchPaymentData()
    },[cart])
    console.log('Payment Summary');
    console.log(paymentSummary);

    console.log('delivery Options');

    console.log(deliveryOptions);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <title>Checkout</title>
            <CheckoutHeader cart={cart} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
                    
                </div>
            </div>


        </>
    )
}
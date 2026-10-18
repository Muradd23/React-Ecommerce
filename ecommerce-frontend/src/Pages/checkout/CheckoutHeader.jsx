import { Link } from 'react-router'
import './CheckoutHeader.css'

export function CheckoutHeader({cart}) {
    let cartQuantity = 0 
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity
    })
    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/" style={{textDecoration:'none'}}>
                            <div className='left-title'>E-commerce</div>
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">{cartQuantity} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

        </>
    )
}
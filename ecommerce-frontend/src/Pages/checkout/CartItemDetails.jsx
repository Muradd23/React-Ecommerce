import axios from "axios"
import { formatMoney } from "../../utils/money"
import { useState } from "react"
export function CartItemDetails({ cartItem, loadCart }) {
    const [showInput, setShowInput] = useState(false)
    const [quantity, setQuantity] = useState(cartItem.quantity)
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart()
    }
    const updateCartItem = async () => {
        if (!showInput) {
            setShowInput(true)
            return
        }
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        })

        setShowInput(false)
        await loadCart()
    }

    const selectQuantity = async (event) => {
        const quantitySelected = Number(event.target.value)
        setQuantity(quantitySelected)
    }
    
    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">

                    <span>
                        Quantity: {showInput ?
                            <input type="text" value={quantity} onKeyDown={(event)=>{
                                if(event.key==='Enter'){
                                    updateCartItem()
                                }
                                if(event.key==='Escape'){
                                    setShowInput(false)
                                }
                            }} onChange={selectQuantity} className="update-quantity-input" /> :
                            <span className="quantity-label">{cartItem.quantity}</span>}
                    </span>

                    <span className="update-quantity-link link-primary" onClick={updateCartItem} >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>

        </>
    )
}
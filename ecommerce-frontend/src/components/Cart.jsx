import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { 
    cartProducts, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal,
    getCartItemsCount 
  } = useCart()

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity)
  }

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!')
    clearCart()
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button 
        className="cart-toggle"
        onClick={() => setIsOpen(true)}
      >
        🛒 View Cart ({getCartItemsCount()})
      </button>
    )
  }

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        
        <div className="cart-items">
          {cartProducts.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartProducts.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        
        {cartProducts.length > 0 && (
          <div className="cart-footer">
            <div className="total">Total: ${getCartTotal().toFixed(2)}</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={clearCart}
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                Clear Cart
              </button>
              <button 
                onClick={handleCheckout}
                className="checkout-btn"
                style={{ flex: 2 }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <div className="rating">⭐ {product.rating}</div>
        
        {showDetails && (
          <div className="product-details">
            <p>{product.description}</p>
          </div>
        )}
        
        <div className="product-actions">
          <button 
            onClick={toggleDetails}
            className="btn-secondary"
          >
            {showDetails ? 'Less' : 'More'} Details
          </button>
          <button 
            onClick={handleAddToCart}
            className="btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
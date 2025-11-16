import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        No products found. Try adjusting your search or filters.
      </div>
    )
  }

  return (
    <div className="container">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
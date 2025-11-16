import { useState, useEffect } from 'react'

export const useProducts = (category = '', search = '') => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const params = new URLSearchParams()
        if (category) params.append('category', category)
        if (search) params.append('search', search)
        
        const response = await fetch(`/api/products?${params}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const data = await response.json()
        setProducts(data.products || [])
      } catch (err) {
        setError(err.message)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category, search])

  return { products, loading, error }
}
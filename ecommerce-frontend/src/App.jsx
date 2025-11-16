import { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Loading from './components/Loading'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' or 'register'

  useEffect(() => {
    fetchProducts()
  }, [category, search])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (category) params.append('category', category)
      if (search) params.append('search', search)
      
      const response = await fetch(`http://localhost:5000/api/products?${params}`)
      const data = await response.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  const handleShowLogin = () => {
    setAuthMode('login')
    setShowAuth(true)
  }

  const handleShowRegister = () => {
    setAuthMode('register')
    setShowAuth(true)
  }

  const handleCloseAuth = () => {
    setShowAuth(false)
  }

  const switchToRegister = () => {
    setAuthMode('register')
  }

  const switchToLogin = () => {
    setAuthMode('login')
  }

  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header 
            search={search} 
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            onShowLogin={handleShowLogin}
            onShowRegister={handleShowRegister}
          />
          <main className="main-content">
            {loading ? (
              <Loading />
            ) : (
              <ProductList products={products} />
            )}
          </main>
          <Cart />
          
          {/* Auth Modals */}
          {showAuth && authMode === 'login' && (
            <Login 
              onSwitchToRegister={switchToRegister}
              onClose={handleCloseAuth}
            />
          )}
          
          {showAuth && authMode === 'register' && (
            <Register 
              onSwitchToLogin={switchToLogin}
              onClose={handleCloseAuth}
            />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
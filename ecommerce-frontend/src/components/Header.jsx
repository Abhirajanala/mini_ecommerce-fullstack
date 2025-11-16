import { useAuth } from '../context/AuthContext'

const Header = ({ search, setSearch, category, setCategory, onShowLogin, onShowRegister }) => {
  const { user, logout } = useAuth()

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            🛍️ ShopEasy
          </div>
          
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              className="search-input"
            />
            <select 
              value={category} 
              onChange={handleCategoryChange}
              className="category-select"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          
          <div className="header-actions">
            {user ? (
              <div className="user-info">
                <span>Welcome, {user.name}</span>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button onClick={onShowLogin} className="auth-btn">
                  Login
                </button>
                <button onClick={onShowRegister} className="auth-btn register">
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
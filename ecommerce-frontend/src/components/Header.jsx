import { useAuth } from '../context/AuthContext'
import SearchBar from './SearchBar'

const Header = ({ search, setSearch, category, setCategory, onShowLogin, onShowRegister }) => {
  const { user, logout } = useAuth()

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
          
          <SearchBar 
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
          
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
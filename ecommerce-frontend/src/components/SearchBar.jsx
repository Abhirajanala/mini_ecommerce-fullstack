import { useState } from 'react';

const SearchBar = ({ search, setSearch, category, setCategory, onSearch }) => {
  const [localSearch, setLocalSearch] = useState(search);

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(localSearch);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const clearSearch = () => {
    setLocalSearch('');
    setSearch('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={handleSearchChange}
            className="search-input"
          />
          {localSearch && (
            <button 
              type="button" 
              onClick={clearSearch}
              className="clear-search-btn"
            >
              ✕
            </button>
          )}
          <button type="submit" className="search-btn">
            🔍
          </button>
        </div>
        
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
      </form>
      
      {(search || category) && (
        <div className="active-filters">
          <span>Active filters: </span>
          {search && (
            <span className="filter-tag">
              Search: "{search}"
              <button onClick={() => setSearch('')}>✕</button>
            </span>
          )}
          {category && (
            <span className="filter-tag">
              Category: {category}
              <button onClick={() => setCategory('')}>✕</button>
            </span>
          )}
          {(search || category) && (
            <button 
              onClick={() => { setSearch(''); setCategory(''); }}
              className="clear-all-btn"
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
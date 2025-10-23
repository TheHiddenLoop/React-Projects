export function Header({ onCategoryChange, onPriceChange, onSearchChange }) {
  return (
    <div className="filter-section">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <i className="fas fa-search"></i>
      </div>

      <div className="filter-options">
        <select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Kitchen</option>
          <option value="sports">Sports & Outdoors</option>
          <option value="books">Books</option>
        </select>

        <select onChange={(e) => onPriceChange(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="1000">Greater ₹1,000</option>
          <option value="5000">Greater ₹5,000</option>
          <option value="10000">Greater ₹10,000</option>
          <option value="50000">Greater ₹50,000</option>
        </select>
      </div>
    </div>
  );
}

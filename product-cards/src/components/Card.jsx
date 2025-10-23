export function Card({ product }) {
  const categoryDisplayName =
    product.category?.charAt(0).toUpperCase() + product.category?.slice(1);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <span className={`product-category category-${product.category}`}>
          {categoryDisplayName}
        </span>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
        <p className="product-description">{product.description}</p>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

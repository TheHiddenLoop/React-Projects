import { Card } from "./components/Card";
import "./App.css";
import Product from "./Products/Product.js";
import { Header } from "./components/Header.jsx";
import { useState } from "react";
function App() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = Product.filter((e) => {
    const category = categoryFilter === "all" || e.category === categoryFilter;
    const price = priceFilter === "all" || e.price >= Number(priceFilter);
    const search = e.title.toLowerCase().includes(searchTerm.toLowerCase());
    return category && price && search;
  });

  return (
    <div className="apps-conat">
      <Header
        onCategoryChange={setCategoryFilter}
        onPriceChange={setPriceFilter}
        onSearchChange={setSearchTerm}
      />
      <div className="products-container">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;

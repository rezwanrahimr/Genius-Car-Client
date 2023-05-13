import React, { useEffect, useState } from "react";
import TopHeader from "../../Sheard/TopHeader/TopHeader";
import ProductsCard from "./ProductCard/ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Load Products.
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-center">
      <div>
        <TopHeader>
          {{
            firstName: "Popular Products",
            secondName: "Browse Our Products",
            thadName: `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
          }}
        </TopHeader>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((element) => (
          <ProductsCard key={element._id} product={element}></ProductsCard>
        ))}
      </div>
      {/* More Service Button */}
      <button
        style={{
          width: "170px",
          height: "56px",
          color: "#FF3811",
          background: "none",
          border: "1px solid #FF3811",
          margin: "50px auto",
        }}
      >
        More Products
      </button>
    </div>
  );
};

export default Products;

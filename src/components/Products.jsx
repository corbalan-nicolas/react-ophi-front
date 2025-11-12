import React from "react";


const Products = ({ products }) => {
  return (
    <>
      {products.map((p, index) => (
        <div key={index}>
          <h3>{p.name}</h3>

          <div>
            <h4>Ingredientes</h4>
            <p>{p.ingredients.join(", ")}.</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;

import React from "react";
import ProductCard from "./ProductCard.jsx";
import ProductCardList from "./ProductCardList.jsx";


const Products = ({ products }) => {
  return (
    <>
      <ProductCardList>
        {products.map((p, index) => <ProductCard product={p} key={index} />)}
      </ProductCardList>
    </>
  );
};

export default Products;

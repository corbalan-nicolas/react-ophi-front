import React from "react";
import ProductCard from "./ProductCard.jsx";
import ProductCardList from "./ProductCardList.jsx";


const Products = ({ products }) => {
  console.log(products);
  return (
    <>
      {(products !== undefined && products !== 404) ? 
          <ProductCardList>
            {!Array.isArray(products)  ? 
              <ProductCard product={products}></ProductCard>
            :
              products.map((p, index) => <ProductCard product={p} key={index} />) 
            }
          </ProductCardList>
        :
          <h2>No encontramos resultados!</h2>
      }
      
    </>
  );
};

export default Products;

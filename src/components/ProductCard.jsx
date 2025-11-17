import React from "react";
import SaladIcon from "./icons/SaladIcon.jsx";
import {Link} from "react-router";

const ProductCard = ({product, props}) => {
    // console.log(product);
    return (
        <article className='glass p-4 rounded-lg' {...props}>
            <h3 className='text-2xl'>
                {/* Por algún motivo la linea de abajo no funciona, pero bueno, eu tenté mano TODO: Link al detalle de producto en la card */}
                <Link to={`/producto/${product.name.toLowerCase().split(' ').join('')}`}>{ product.name }</Link>
                {/* { product.name } */}
            </h3>
            <div className='linear-to-r grid grid-cols-[auto_1fr] mt-4 gap-2' title={'Ingredientes: ' + product.ingredients.join(', ')}>
                <SaladIcon />
                <h4 className='sr-only'>Ingredientes</h4>
                <p className='truncate'>{product.ingredients.join(", ")}</p>
            </div>
        </article>
    )
}

export default ProductCard;
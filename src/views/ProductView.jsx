import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Product from "../components/Product";
import { findByName } from "../services/Product";


const ProductView = () => {
    const params = useParams();
    const navigate = useNavigate();

    const endPoint = 'http://localhost:5000/api/food/name';
    const [products, setProducts] = useState();
    console.log(endPoint)
    useEffect(() => {
        async function getFoodByName() {
            try {
                const result = await findByName(params.name);
                console.log(result);
                if(result.status === 404) {
                    navigate('/not-found')
                } else {
                    setProducts(result);
                }
            } catch (error) {
                console.log('Error al buscar producto por nombre', error);
            }
        }

        getFoodByName();
    }, [params.name])
    
    return (
        <>
            <span>TESt</span>
            { products ? 
                <Product product={products}></Product>
            :
                ''
            }
        </>
    );
}

export default ProductView;
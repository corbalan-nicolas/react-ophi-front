import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Product from "../components/Product";
import { find_by_name } from "../services/Product";


const ProductView = () => {
    const params = useParams();
    const navigate = useNavigate();

    const endPoint = 'http://localhost:5000/api/food/name';
    const [products, setProducts] = useState();
    console.log(endPoint)
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await find_by_name(params.name)
                if(result) {
                    setProducts(result);
                } else {
                    navigate('/not-found')
                }
                
                
            } catch (error) {
                console.log('Error al buscar producto por nombre', error);
            }
        }

        fetchData();
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
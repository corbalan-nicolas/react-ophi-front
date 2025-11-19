import React, { useContext, useEffect, useState } from "react";
import Alert from "./Alert";
import { AuthContext } from "../context/AuthContext";
import { getUserAllergy } from "../services/User";

const Product = ({ product }) => {
    
    const {user} = useContext(AuthContext);
    const [userAllergy, setUserAllergy] = useState(null);    
    const [nutritionalDanger, setNutritionalDanger] = useState(false);
    const [safe, setSafe] = useState(true);


    

    useEffect(() => {
        async function getAllergy () {
            try {
                const result = await getUserAllergy(user.allergy);
                console.log(result);
                if(result) {
                    setUserAllergy(result);
                }
            } catch(error) {
                console.error('Error al obtener la alergia del usuario', error);
            }
        }
        getAllergy();
    }, []);

    useEffect(() => {
        if (product.nutritionalInfo.calories > 400 || product.nutritionalInfo.fat > 17 || product.nutritionalInfo.sugar > 10) {
            setNutritionalDanger(true);
        }

        function checkCompatibility() {
            product.normalizedIngredients.forEach(ingredient => {
                userAllergy.normalizedRestrictedIngredients.forEach(uIngredient => {
                    if(ingredient === uIngredient) {
                        setSafe(false);
                    }
                })
            });
        }


        if(userAllergy !== null) {
            checkCompatibility();
        }
        
    }, [userAllergy]);

    return (
        <>
            <h1 className='text-6xl mb-6'>{product.name}</h1>

            <span className='sr-only'>Resultado</span>
            <Alert safe={safe}></Alert>

            <div className='md:grid grid-cols-2'>
                <div>
                    <h3 className='text-4xl mb-3 mt-6'>Ingredientes</h3>
                    <p>{product.ingredients.join(', ')}.</p>
                </div>

                <div className='row-span-2'>
                    <h3 className='text-4xl mb-3 mt-6'>Información nutricional</h3>
                    <table className="w-full glass rounded-lg overflow-hidden">
                        <tbody>
                        <tr>
                            <td className='py-2 px-4 glass--border border-b'>Calorías</td>
                            <td className='py-2 px-4 glass--border border-b'>{product.nutritionalInfo.calories} kcal</td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 glass--border border-b'>Grasas</td>
                            <td className='py-2 px-4 glass--border border-b'>{product.nutritionalInfo.fat} g</td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 glass--border border-b'>Azúcar</td>
                            <td className='py-2 px-4 glass--border border-b'>{product.nutritionalInfo.sugar} g</td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 glass--border'>Proteínas</td>
                            <td className='py-2 px-4 glass--border'>{product.nutritionalInfo.protein} g</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3 className='text-4xl mb-3 mt-6'>Posibles peligros</h3>
                    {nutritionalDanger ?
                        <>
                            <p>{product.nutritionalInfo.calories > 400 ? 'Alto en calorías' : ''}</p>
                            <p>{product.nutritionalInfo.fat > 17 ? 'Alto en grasas' : ''}</p>
                            <p>{product.nutritionalInfo.sugar > 10 ? 'Alto en azúcares' : ''}</p>
                        </>
                        :
                        <p>No hay peligros en este alimento</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Product;
import React, { useEffect, useState } from "react";
import Alert from "./Alert";

const Product = ({ product }) => {
    

    const hardcodedUser = {
        allergy: {
            _id: "6913c4c65fc1deaee327a3b5",
            name: "Huevo",
            normalizedName: "huevo",
            description: "Alergia a las proteínas presentes en la clara o yema del huevo.",
            type: 1,
            normalizedType: "intolerancia",
            symptoms: ["urticaria", "tos", "vómitos"],
            normalizedSymptoms: ["urticaria", "tos", "vómitos"],
            severity: 3,
            normalizedSeverity: "severo",
            restrictedIngredients: ["huevo", "mayonesa", "pasteles con huevo"],
            normalizedRestrictedIngredients: ["huevo", "mayonesa", "pastelesconhuevo"],
            alternativesIngredients: ["semillas de chía", "banana madura"],
            normalizedAlternativesIngredients: ["semillasdechia", "bananamadura"],
            __v: 0
        } 
    }
    const [nutritionalDanger, setNutritionalDanger] = useState(false);
    const [safe, setSafe] = useState(true);

    useEffect(() => {
        if (product.nutritionalInfo.calories > 400 || product.nutritionalInfo.fat > 17 || product.nutritionalInfo.sugar > 10) {
            setNutritionalDanger(true);
        }

        function checkCompatibility() {
            product.normalizedIngredients.forEach(ingredient => {
                hardcodedUser.allergy.normalizedRestrictedIngredients.forEach(uIngredient => {
                    if(ingredient === uIngredient) {
                        setSafe(false);
                    }
                })
                
            });
        }
        checkCompatibility();
    });

    return (
        <>
            <h2>{product.name}</h2>
            <span>Resultado</span>
            <Alert safe={safe}></Alert>

            <div>
                <h3>Ingredientes</h3>
                <p>{product.ingredients.join(', ')}.</p>
            </div>

            <div>
                <h3>Información nutricional</h3>
                <table className="nutrition-label">
                    <tbody>
                        <tr>
                            <td>Calorías</td>
                            <td>{product.nutritionalInfo.calories} kcal</td>
                        </tr>
                        <tr>
                            <td>Grasas</td>
                            <td>{product.nutritionalInfo.fat} g</td>
                        </tr>
                        <tr>
                            <td>Azúcar</td>
                            <td>{product.nutritionalInfo.sugar} g</td>
                        </tr>
                        <tr>
                            <td>Proteínas</td>
                            <td>{product.nutritionalInfo.protein} g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>Posibles peligros</h3>
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
        </>
    )
}

export default Product;
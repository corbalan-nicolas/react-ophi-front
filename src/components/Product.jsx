import React, { useEffect, useState } from "react";
import Alert from "./Alert";

const Product = ({ product }) => {

    const [nutritionalDanger, setNutritionalDanger] = useState(false);

    useEffect(() => {
        if (product.nutritionalInfo.calories > 400 || product.nutritionalInfo.fat > 17 || product.nutritionalInfo.sugar > 10) {
            setNutritionalDanger(true);
        }
    });

    return (
        <>
            <h2>{product.name}</h2>
            <span>Resultado</span>
            <Alert safe={false}></Alert>

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
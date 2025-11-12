import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateUserAllergy } from "../services/User";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getAllIntolerances } from "../services/Intolerances";

const EditProfileView = () => {
    const {user} = useContext(AuthContext);
    const hardcodedId = '6913c356eaf97485de5f339b';
    const [inputValue, setInputValue] = useState('');
    const [intolerances, setIntolerances] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getIntolerances() {
            try {
                const result = await getAllIntolerances();
          
                if(result) {
                    setIntolerances(result);
                }
                console.log(intolerances);
            } catch (error) {
                console.error('Error al obtener las intolerancias');
            }
        }

        getIntolerances();
    }, []);

    


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await updateUserAllergy(hardcodedId, {allergy: inputValue});
            navigate('/perfil');
        } catch (error) {
            console.error('[VIEW] error al actualizar la alergia del usuario', error);
        }
        
    }

    function handleChange(e) {
        setInputValue(e);
        
    }

    return (
        <>
            <h1>Editar</h1>
            <form action="#" method="#" onSubmit={handleSubmit}>
                <label htmlFor="newAllergy">Actualizar alergia</label>
                <select 
                    id="newAllergy" 
                    name="newAllergy" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                >
                    {intolerances.map((intolerance, index) => <option key={index}  value={intolerance._id}>{intolerance.name}</option>)}
                </select>

                <button type="submit">Actualizar</button>
            </form>

        </>
    )
}

export default EditProfileView;
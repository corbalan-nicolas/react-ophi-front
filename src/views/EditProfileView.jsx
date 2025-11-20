import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateUserAllergy } from "../services/User";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getAllIntolerances } from "../services/Intolerances";

const EditProfileView = () => {
    const {user, login} = useContext(AuthContext);
    console.log(user, 'AOUISFNAOSIKn')
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
        console.log(inputValue, 'INPUT');
        e.preventDefault();
        try {
            const result = await updateUserAllergy(user.id, {allergy: inputValue});
            console.log(result);
            login(result);
            navigate('/perfil');
        } catch (error) {
            console.error('[VIEW] error al actualizar la alergia del usuario', error);
        }
        
    }


    return (
        <>
            <h1 className='text-6xl mb-6 text-center'>Editar alergia</h1>
            <form action="#" method="#" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className='mb-1 inline-block linear-to-r'
                        htmlFor="newAllergy"
                    >Actualizar alergia</label>

                    <select
                        id="newAllergy"
                        name="newAllergy"
                        className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                        <option value="">Selecciona una alergia...</option>
                        {intolerances.map((intolerance, index) => <option key={index}  value={intolerance._id}>{intolerance.name}</option>)}
                    </select>
                </div>

                <button
                    className="py-2 px-4 glass glass--events w-full col-span-full"
                    type="submit"
                >Actualizar</button>
            </form>

        </>
    )
}

export default EditProfileView;
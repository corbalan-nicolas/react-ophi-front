import React, { useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
        const navigate = useNavigate();
    const [foodSearch, setFoodSearch] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(foodSearch);
        navigate(`/producto/${foodSearch}`);
    }

    return (
        <>
            <form action="#" method="get" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="foodSearch">Buscar</label>
                <input id="foodSearch" name="foodSearch" value={foodSearch} onChange={(e) => setFoodSearch(e.target.value)}></input>
                <button type="Subimt">buscar</button>
            </form>
        </>
    )
}

export default Search;
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
    const navigate = useNavigate();
    const [foodSearch, setFoodSearch] = useState('');

    function normalizeFoodSearch(value) {
        return value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const normalizedValue = normalizeFoodSearch(foodSearch);
        if (!normalizedValue) {
            return;
        }
        navigate(`/producto/${encodeURIComponent(normalizedValue)}`);
    }

    return (
        <>
            <form action="#" method="get" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="foodSearch">Buscar</label>
                <input id="foodSearch" name="foodSearch" value={foodSearch} onChange={(e) => setFoodSearch(e.target.value)}></input>
                <button type="submit">buscar</button>
            </form>
        </>
    )
}

export default Search;
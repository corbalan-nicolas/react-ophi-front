import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon.jsx";
import { findByName } from "../services/Product.js";
import { useEffect } from "react";

const Search = ({searchResult}) => {
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
        const result = await getFoodByName(normalizedValue);


        searchResult(result);
    }

    async function getFoodByName(normalizedValue) {
        try {
            const result = await findByName(normalizedValue);
            if(result.status === 404) {
                return 404;
            } else {
                return result;
            }
        } catch (error) {
            console.log('Error al buscar producto por nombre', error);
        }
    }

    useEffect(() => {
        
        if (foodSearch === '') {
            searchResult(null);
        }
    }, [foodSearch])

    return (
        <>
            <form className='flex justify-center-center gap-4 mx-auto lg:w-200' action="#" method="get" onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="foodSearch"
                    className='block w-full border-white/30 border-1 bg-black/20 placeholder:text-white/60 transition focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                    name="foodSearch"
                    aria-label='Buscar'
                    placeholder="Buscar..."
                    value={foodSearch}
                    onChange={(e) => setFoodSearch(e.target.value)}
                />
                { /* TODO: Filtros (para un futuro) */ }
                <button
                    type="submit"
                    aria-label="Buscar"
                    className='text-black/60 p-2 glass glass--events'
                >
                    <SearchIcon />
                </button>
            </form>
        </>
    )
}

export default Search;
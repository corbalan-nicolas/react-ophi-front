import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        {   
            name: 'userTest',
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
    );
    
    return (
        <AuthContext.Provider value={{user}}>
            { children }
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};
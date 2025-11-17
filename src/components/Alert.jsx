import React from "react"
import SuccessIcon from "./icons/SuccessIcon.jsx";
import DangerIcon from "./icons/DangerIcon.jsx";

const Alert = ({safe}) => {
    const concatClass = safe ? "glass--success" : "glass--danger";
    return (
        <div className={'border rounded-lg p-4 glass flex justify-center gap-2 animate-highlight ' +  concatClass}>
            {safe ? <SuccessIcon /> : <DangerIcon /> }
            <p>{safe ? 'Apto para tu consumo' : 'No es apto para tu consumo'}</p>
        </div>
    )
}

export default Alert;
import React from "react"

const Alert = ({safe}) => {
    return (
        <div>
            <p>{safe ? 'Apto para tu consumo' : 'No es apto para tu consumo'}</p>
        </div>
    )
}

export default Alert;
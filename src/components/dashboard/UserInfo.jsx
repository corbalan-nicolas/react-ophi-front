const UserInfo = ({user, allergy}) => {
    if(!user || !allergy) {
        return null;
    }
    return ( 
        <article className="flex flex-col gap-2">
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>Nombre: {user.name}</h2>
            </div>
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>Email: {user.email}</h2>
            </div>
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>Alergia: {allergy.name}</h2>
            </div>
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>Fechas</h2>
                <div className="flex flex-col">
                    <span>Creado: {user.created_at}</span>
                    <span>Editado: {user.updated_at}</span>
                </div>
            </div>
            
        </article>
    )
}

export default UserInfo;
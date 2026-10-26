function PeliculaCard({titulo, año, director, calificacion, imagen}){
    /* Props con Destructuring */
    return(
        <article className="pelicula-card">
            <img className="pelicula-card__image" src = {imagen}
alt = {titulo}/> {/* Se carga la url de la portada */}
            <div className="pelicula-card__content">
                <h3 className="pelicula-card__title">{titulo}</h3>{/* Nombre */}
                <p className="pelicula-card__info"> {año} - { director} </p>{/* Año y director */}
                <p className="pelicula-card__rating"> {calificacion}</p>{/*Rating  */}
            </div>
        </article>
    )
}
export default PeliculaCard;
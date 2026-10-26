function Footer(){
    const añoActual = new Date().getFullYear();
    return (
        <footer className="footer">
            <p> {añoActual} Club de videos</p> {/*Expresiones javascript  */}
        </footer>
    );
}

export default Footer; /* Para poderlo usar en otros archivos */
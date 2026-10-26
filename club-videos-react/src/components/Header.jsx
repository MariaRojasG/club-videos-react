function Header(darkMode, onToggle){ /* Son los proops, valor y funcion actualizadora */
    return (
        <header className="header">
            <h1 className="header__logo">Club de videos</h1>
            <button className="header__toggle"
            onClick={onToggle} /* Evento parecido a AddEventListener */
            >{darkMode ? 'Claro': 'Oscuro'} Dark Mode</button>{/* Condicion ternaria */}
        </header>
    );
}

export default Header;
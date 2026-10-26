/* Es el componente principal y cerebro de nuestra aplicacion */
import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PeliculaCard from './components/PeliculaCard.jsx';
import './App.css'

function App() {
  const [busqueda, setBusqueda] = useState('');/* Busqueda del usuario que escribe en la barra de busqueda */
  const [darkMode, setDarkMode] = useState(false);/* Para saber si el modo oscuro esta activado */
  const toggleDarkMode=()=>{
    setDarkMode(!darkmode);/* Funcion para alternar entre activar y desactivar el modo oscuro */
  };
  const peliculas=[
        { id: 1, titulo: 'El Padrino', año: 1972, director: 'Francis Ford Coppola', calificacion: 9.2, imagen: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
        { id: 2, titulo: 'Titanic', año: 1997, director: 'James Cameron', calificacion: 8.9, imagen: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
        { id: 3, titulo: 'Inception', año: 2010, director: 'Christopher Nolan', calificacion: 9.0, imagen: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' }
    ];

    const peliculasFiltradas=peliculas.filter((p)=>/* Filtra unicamente las peliculas ingresadas por el usuario */
      p.titulo.toLowerCase().includes(busqueda.toLowerCase())/* Convierte todo a minuscula */
    );

    return(
      <div className={`app ${darkMode} ? 'dark' : ''`}>
        <Header darkMode={darkMode} onToggle={toggleDarkMode} />
        <main className='main'>
          <h2 className='main__title'>Peliculas Destacadas</h2>
          <input 
            type="text"
            className='controles_search'
            placeholder='Buscar...'
            value={busqueda}
            onChange={(e)=> setBusqueda(e.target.value)} /* Cada vez que tipeamos algo se actualiza el estado */
          />
          <div className='peliculas-grid'>
            {
              peliculasFiltradas.map((p)=>(/* Recore Peliculas filtradas */
                <PeliculaCard /* Devuelve una tarjeta, pasando todas sus propiedades con un key = id unico */
                  key={p.id}
                  titulo={p.titulo}
                  año={p.año}
                  director={p.director}
                  calificacion={p.calificacion}
                  imagen={p.imagen}
                />
              ))}
          </div>
        </main>
      </div>
    )
} 
export default App;

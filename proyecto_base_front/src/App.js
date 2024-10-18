import React, { useEffect, useState } from 'react'; // Importamos hooks de React
import logo from './logo.svg';
import './App.css';

function App() {
  // Estado para almacenar los datos que recibimos del backend
  const [data, setData] = useState(null);

  // useEffect para hacer la llamada al backend cuando el componente se monte
  useEffect(() => {
    // Aquí hacemos la llamada al backend
    fetch('http://192.168.112.2:8000/api/prueba/')  // Cambia esto al endpoint real de tu backend
      .then(response => response.json())
      .then(data => setData(data))  // Almacenamos la respuesta en el estado
      .catch(error => console.error('Error:', error));
  }, []);  // El array vacío [] hace que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.5
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Mostrar los datos del backend si existen */}
        {data ? (
          <div>
            <h3>Datos del Backend:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </header>
    </div>
  );
}

export default App;

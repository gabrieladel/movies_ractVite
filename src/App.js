import React from 'react';
import Header from 'componentes/Header'; // Asegúrate de que la ruta sea correcta
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
function App() {
  return (
    <div className="App">
      <Header />
      {/* Resto de tu aplicación */}
    </div>
  );
}

export default App;

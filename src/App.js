import "./App.css";
import Boton from "./components/boton";
import Contador from "./components/contador";
import logo from "./imagenes/logo.png";
import { useState } from 'react'

function App() {

  const [numClics, setNumclics] = useState(0);

  const manejarClick = () => {
    console.log('clic')
    setNumclics(numClics + 1);
  }
  const reiniciarContador = () => {
    console.log('reset')
    setNumclics(0);
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="container-principal">
        <Contador numClics={numClics} />
        <Boton texto="click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto="reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

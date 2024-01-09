import "./index.css";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
function App() {
  return (
    //Lo que se parece a html se llama jsx
    <div className="App">
      {/* Esto renderiza el otro fichero dentro de la pagina */}
      <Navbar />
      <div className="content">
        <Inicio />
        {/* las variables van dentro de llaves cuando kieras usarlas en html este feo
        <h1>{titulo}</h1> */}
      </div>
    </div>
  );
}

export default App;

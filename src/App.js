import "./index.css";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Crear from "./Crear";
import Detalles from "./Detalles"

function App() {
  return (
    <Router>
      {/* //Lo que se parece a html se llama jsx */}
      <div className="App">
        {/* Esto renderiza el otro fichero dentro de la pagina */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Inicio/>
            </Route>
            <Route path="/create">
              <Crear/>
            </Route>
            <Route path="/detalles">
              <Detalles/>
            </Route>
          </Switch>
          {/* las variables van dentro de llaves cuando kieras usarlas en html este feo
        <h1>{titulo}</h1> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

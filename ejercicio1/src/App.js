import { useState } from "react";
import {
  useParams,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Saludo() {
  const params = useParams();
  const nombre = params.nombre;
  return <h3>¡Hola {nombre}!</h3>;
}

function App() {
  const [texto, setTexto] = useState("");
  return (
    <BrowserRouter>
      <p>Escribe tu nombre</p>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Link to={"/saludar/" + texto}>Saludar</Link>
      <Routes>
        <Route path="/saludar/:nombre" element={<Saludo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import {
  useParams,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function Operaciones() {
    const params = useParams();
    const num1 = parseInt(params.num1);
    const num2 = parseInt(params.num2);

    return (
      <>
        <p>{num1 + num2}</p>
        <p>{num1 - num2}</p>
        <p>{num1 * num2}</p>
        <p>{num1 / num2}</p>
        <p>{num1 % num2}</p>

        <button
          onClick={() => {
            setNum1(0);
            setNum2(0);
          }}
        >
          Poner en 0 los números
        </button>
      </>
    );
  }

  return (
    <BrowserRouter>
      <p>{num1}</p>
      <button onClick={setNum1(num1 + 1)}>Sumar</button>
      <button onClick={setNum1(num1 - 1)}>Restar</button>

      <p>{num2}</p>
      <button onClick={setNum2(num2 + 1)}>Sumar</button>
      <button onClick={setNum2(num2 - 1)}>Restar</button>
      <div>
        <Link className="botones" to={"/operaciones/" + num1 + "/" + num2}>
          Resultados
        </Link>
        <Link className="botones" to={"/"}>
          Ocultar resultados
        </Link>
      </div>
      <Routes>
        <Route path="/operaciones/:num1/:num2" element={<Operaciones />} />
        <Route path="/operaciones" element={<Operaciones />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

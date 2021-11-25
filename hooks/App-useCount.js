import React, { Fragment } from "react";
// import Formulario from "./components/Formulario";
import { useCount } from "./hooks/useCount";

function App() {
  const [contador] = useCount(0)

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* <Formulario /> */}
          </div>
          <div className="one-half column">{contador}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

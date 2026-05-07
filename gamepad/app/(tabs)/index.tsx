import Contenedor from "../../src/componentes/contenedor";
import IndicadorDeConexion from "../../src/componentes/indicadorDeConexion";
import ControlesDeMovimiento from "../../src/componentes/controladoresDeMovimiento";
import BotonDeSalto from "../../src/componentes/botonDeSalto";

import useConexionConServidor from "../../src/hooks/useConexionConServidor";

export default function App() {
  const {
    estadoDeConexion,
    moverIzquierda,
    detenerIzquierda,
    moverDerecha,
    detenerDerecha,
    saltar,
    dejarDeSaltar,
  } = useConexionConServidor();

  return (
    <Contenedor>
      <IndicadorDeConexion estado={estadoDeConexion} />

      <ControlesDeMovimiento
        alPresionarIzquierda={moverIzquierda}
        alSoltarIzquierda={detenerIzquierda}
        alPresionarDerecha={moverDerecha}
        alSoltarDerecha={detenerDerecha}
      />

      <BotonDeSalto
        alPresionar={saltar}
        alSoltar={dejarDeSaltar}
      />
    </Contenedor>
  );
}
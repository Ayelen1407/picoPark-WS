import { View, StyleSheet } from 'react-native';
import { useConexionConServidor } from '../../src/hooks/useConexionConServidor';
import PantallaDeConexion from '../../src/componentes/Contenedores/pantallaDeConexion';
import GamePad from '../../src/componentes/Contenedores/gamePad';

export default function App() {
  const conexion = useConexionConServidor();

  return (
    <View style={styles.container}>
      {!conexion.estado.conectado ? (
        <PantallaDeConexion
          conectar={conexion.conectar}
          error={conexion.error}
          conectando={conexion.conectando}
        />
      ) : (
        <GamePad
          estado={conexion.estado}
          desconectar={conexion.desconectar}
          enviarComando={conexion.enviarComando}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
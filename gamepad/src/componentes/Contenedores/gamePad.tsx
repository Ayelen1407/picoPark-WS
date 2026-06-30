import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { EstadoConexion } from '../../tipos/gamepad';
import ControlesDeMovimiento from '../Contenidos/controladoresDeMovimiento';
import BotonDeSalto from '../Contenidos/botonDeSalto';
import IndicadorDeConexion from '../Contenidos/indicadorDeConexion';

interface Props {
  estado: EstadoConexion;
  enviarComando: (comando: any) => void;
}

const GamePad: React.FC<Props> = ({ estado, enviarComando }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.sidebar}>
        <IndicadorDeConexion conectado={estado.conectado} />
        <Text style={styles.footerText}>{estado.ip}</Text>
      </View>

      <View style={styles.gameArea}>
        <ControlesDeMovimiento enviarComando={enviarComando} />
        <BotonDeSalto enviarComando={enviarComando} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
  },
  sidebar: {
    width: 85,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  disconnectButton: {
    width: 44,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#334ec5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  disconnectText: {
    fontSize: 18,
    color: 'white',
  },
  gameArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  footerText: {
    color: 'rgba(192, 192, 192, 0.7)',
    fontSize: 11,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
});

export default GamePad;
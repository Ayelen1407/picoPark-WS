import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EstadoConexion } from '../../tipos/gamepad';
import ControlesDeMovimiento from '../Contenidos/controladoresDeMovimiento';
import BotonDeSalto from '../Contenidos/botonDeSalto';
import IndicadorDeConexion from '../Contenidos/indicadorDeConexion';

interface Props {
  estado: EstadoConexion;
  desconectar: () => void;
  enviarComando: (comando: any) => void;
}

const GamePad: React.FC<Props> = ({ estado, desconectar, enviarComando }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IndicadorDeConexion conectado={estado.conectado} />
          <Text style={styles.idText}>ID: {estado.clienteId?.slice(0, 8)}...</Text>
        </View>
        <TouchableOpacity style={styles.disconnectButton} onPress={desconectar}>
          <Text style={styles.disconnectText}>❌</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameArea}>
        <ControlesDeMovimiento enviarComando={enviarComando} />
        <BotonDeSalto enviarComando={enviarComando} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Conectado a: {estado.ip}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(20px)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  idText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'monospace',
    opacity: 0.9,
  },
  disconnectButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(239,68,68,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  disconnectText: {
    fontSize: 20,
    color: 'white',
  },
  gameArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 40,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});

export default GamePad;
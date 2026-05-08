import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TipoInput, EstadoInput, Direccion } from '../../tipos/gamepad';
import JoystickVirtual from './joystickVirtual';

interface Props {
  enviarComando: (comando: any) => void;
}

const ControlesDeMovimiento: React.FC<Props> = ({ enviarComando }) => {
  const handleDireccion = (direccion: Direccion, pressed: boolean) => {
    enviarComando({ 
      tipo: "movimiento" as TipoInput,
      estado: pressed ? "keydown" : "keyup" as EstadoInput,
      direccion 
    });
  };

  return (
    <View style={styles.container}>
      <JoystickVirtual onDireccion={handleDireccion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ControlesDeMovimiento;
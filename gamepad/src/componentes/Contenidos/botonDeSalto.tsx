import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TipoInput, EstadoInput } from '../../tipos/gamepad';

interface Props {
  enviarComando: (comando: any) => void;
}

const BotonDeSalto: React.FC<Props> = ({ enviarComando }) => {
  const handleSalto = (pressed: boolean) => {
    enviarComando({ 
      tipo: "salto" as TipoInput,
      estado: pressed ? "keydown" : "keyup" as EstadoInput
    });
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPressIn={() => handleSalto(true)}
      onPressOut={() => handleSalto(false)}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>A</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default BotonDeSalto;
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Direccion } from '../../tipos/gamepad';

interface Props {
  onDireccion: (direccion: Direccion, pressed: boolean) => void;
}

const JoystickVirtual: React.FC<Props> = ({ onDireccion }) => {
  const [direccionActiva, setDireccionActiva] = useState<Direccion | null>(null);

  const handlePress = (direccion: Direccion, pressed: boolean) => {
    setDireccionActiva(pressed ? direccion : null);
    onDireccion(direccion, pressed);
  };

  return (
    <View style={styles.container}>
      {(['izquierda', 'derecha', 'arriba', 'abajo'] as Direccion[]).map((direccion) => {
        const isActive = direccionActiva === direccion;
        
        return (
          <TouchableOpacity
            key={direccion}
            style={[
              styles.button,
              isActive && styles.buttonActiveOverlay,
              getPositionStyle(direccion)
            ]}
            onPressIn={() => handlePress(direccion, true)}
            onPressOut={() => handlePress(direccion, false)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.buttonText,
              isActive && styles.buttonTextActive
            ]}>
              {direccion === 'izquierda' ? '<' :
               direccion === 'derecha' ? '>' :
               direccion === 'arriba' ? 'ʌ' : 'v'}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getPositionStyle = (direccion: Direccion) => {
  const positions: Record<Direccion, any> = {
    izquierda: styles.leftPosition,
    derecha: styles.rightPosition,
    arriba: styles.topPosition,
    abajo: styles.bottomPosition,
  };
  return positions[direccion];
};

const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 224,
    borderRadius: 110,
    backgroundColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(163, 163, 163, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2b2b2b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonActiveOverlay: {
    backgroundColor: '#1b1724',
    shadowOpacity: 0.8,
    elevation: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  buttonTextActive: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  leftPosition: {
    position: 'absolute',
    left: 20,
  },
  rightPosition: {
    position: 'absolute',
    right: 20,
  },
  topPosition: {
    position: 'absolute',
    top: 20,
  },
  bottomPosition: {
    position: 'absolute',
    bottom: 20,
  },
});

export default JoystickVirtual;
import React from 'react';
import {Text, Animated, StyleSheet } from 'react-native';

interface Props {
  conectado?: boolean;
}

const IndicadorDeConexion: React.FC<Props> = ({ conectado = false }) => {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (conectado) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2, duration: 1000, useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1, duration: 1000, useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [conectado, pulseAnim]);

  return (
    <Animated.View style={[
      styles.led,
      conectado ? styles.ledConectado : styles.ledDesconectado,
      { transform: [{ scale: pulseAnim }] }
    ]}>
      <Text style={styles.ledText}>{conectado ? '🟢' : '🔴'}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  led: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ledConectado: {
    backgroundColor: '#4ade80',
    shadowColor: '#4ade80',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  ledDesconectado: {
    backgroundColor: '#6b7280',
  },
  ledText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default IndicadorDeConexion;
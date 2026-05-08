import React, { useState, useRef, useEffect } from 'react';
import IndicadorDeConexion from '../Contenidos/indicadorDeConexion';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet
} from 'react-native';

interface Props {
  conectar: (ip: string) => Promise<void>;
  error: string;
  conectando: boolean;
}

const PantallaDeConexion: React.FC<Props> = ({ conectar, error, conectando }) => {
  const [ip, setIp] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleConectar = async () => {
    if (!ip.trim()) {
      Alert.alert('Error', 'Ingresa la IP del servidor');
      return;
    }
    try {
      await conectar(ip.trim());
    } catch (err) {
      console.error('Error conexión:', err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logo}>
        <Text style={styles.title}>GamePad</Text>
        <Text style={styles.subtitle}>¡Conecta tu celular al juego!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={ip}
          onChangeText={setIp}
          placeholder="Ingrese: IP_LOCAL:PUERTO"
          placeholderTextColor="#999"
          returnKeyType="go"
          onSubmitEditing={handleConectar}
          editable={!conectando}
          selectTextOnFocus
        />
        <TouchableOpacity 
          style={[styles.connectButton, conectando && styles.disabledButton]}
          onPress={handleConectar}
          disabled={conectando}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {conectando ? 'Conectando...' : 'CONECTAR'}
          </Text>
        </TouchableOpacity>
        
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instruction}>  1. Abre el juego en tu PC</Text>
        <Text style={styles.instruction}>2. Copia la IP mostrada</Text>
        <Text style={styles.instruction}> 3. Pégala aquí y conecta</Text>
      </View>

      <View style={styles.estadoContainer}>
        <IndicadorDeConexion conectado={false} />

        <Text style={styles.estadoTexto}>
            Desconectado
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#3b3759',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,
  },
  input: {
    width: '90%',
    padding: 18,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.95)',
    fontSize: 18,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  connectButton: {
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: 25,
    backgroundColor: '#3b82f6',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
    minWidth: 200,
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
    shadowColor: '#9ca3af',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255,107,107,0.15)',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
  },
  instructions: {
    alignItems: 'center',
  },
  instruction: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  estadoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  
    marginTop: 15,
  },
  
  estadoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },  
});

export default PantallaDeConexion;
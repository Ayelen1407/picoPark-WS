import { useState, useEffect, useCallback } from 'react';
import WebSocketService from '../servicios/webSocketServicio';
import { EstadoConexion } from '../tipos/gamepad';

export const useConexionConServidor = () => {
  const [estado, setEstado] = useState<EstadoConexion>({
    conectado: false,
    ip: '',
    clienteId: ''
  });
  const [error, setError] = useState('');
  const [conectando, setConectando] = useState(false);

  const conectar = useCallback(async (ip: string) => {
    try {
      setError('');
      setConectando(true);
      const clienteId = await WebSocketService.conectar(ip);
      setEstado({ conectado: true, ip, clienteId });
    } catch (err) {
      setError('No se pudo conectar al servidor. Verifica la IP y puerto.');
      console.error('Conexión fallida:', err);
    } finally {
      setConectando(false);
    }
  }, []);

  const desconectar = useCallback(() => {
    WebSocketService.desconectar();
    setEstado({ conectado: false, ip: '', clienteId: '' });
  }, []);

  const enviarComando = useCallback((comando: any) => {
    WebSocketService.enviar({
      ...comando,
      clienteId: estado.clienteId!
    });
  }, [estado.clienteId]);

  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null;
    
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          wakeLock = await (navigator as any).wakeLock.request('screen');
          console.log('Wake Lock activado');
        } catch (err) {
          console.log('Wake Lock no disponible:', err);
        }
      }
    };

    if (estado.conectado) {
      requestWakeLock();
    }

    return () => {
      wakeLock?.release();
    };
  }, [estado.conectado]);

  return {
    estado,
    conectar,
    desconectar,
    enviarComando,
    error,
    conectando
  };
};
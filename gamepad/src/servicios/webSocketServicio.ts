import { GamepadComando } from '../tipos/gamepad';

class WebSocketService {
  private ws: WebSocket | null = null;
  private clienteId = `mobile_${Math.random().toString(36).substr(2, 9)}`;
  private callbacks: { [key: string]: (data: any) => void } = {};

  conectar(ip: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(`ws://${ip}/ws`);
  
      this.ws.onopen = () => {
        console.log('Conectado al servidor:', ip);
        resolve(this.clienteId);
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleMessage(data);
        } catch (e) {
          console.error('Error parsing message:', e);
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        reject(error);
      };

      this.ws.onclose = () => {
        console.log('Desconectado del servidor');
      };
    });
  }

  enviar(comando: GamepadComando) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(comando));
    }
  }

  desconectar() {
    this.ws?.close();
    this.ws = null;
  }

  on(event: string, callback: (data: any) => void) {
    this.callbacks[event] = callback;
  }

  private handleMessage(data: any) {
    const handler = this.callbacks[data.tipo];
    handler?.(data);
  }
}

export default new WebSocketService();
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function useConexionConServidor() {
  const [socket, setSocket] = useState<Socket | null>(null);

  const [estadoDeConexion, setEstadoDeConexion] =
    useState("Desconectado");

  useEffect(() => {
    const novoSocket = io("http://10.56.5.106:3000", {
      transports: ["websocket"],
    });

    novoSocket.on("connect", () => {
      console.log("Conectado al servidor");

      setEstadoDeConexion("Conectado");
    });

    novoSocket.on("disconnect", () => {
      console.log("Desconectado del servidor");

      setEstadoDeConexion("Desconectado");
    });

    setSocket(novoSocket);

    return () => {
      novoSocket.disconnect();
    };
  }, []);

  function moverIzquierda() {
    console.log("IZQUIERDA PRESIONADA");
  }

  function detenerIzquierda() {
    console.log("IZQUIERDA SOLTADA");
  }

  function moverDerecha() {
    console.log("DERECHA PRESIONADA");
  }

  function detenerDerecha() {
    console.log("DERECHA SOLTADA");
  }

  function saltar() {
    console.log("SALTO PRESIONADO");
  }

  function dejarDeSaltar() {
    console.log("SALTO SOLTADO");
  }

  return {
    estadoDeConexion,

    moverIzquierda,
    detenerIzquierda,

    moverDerecha,
    detenerDerecha,

    saltar,
    dejarDeSaltar,
  };
}
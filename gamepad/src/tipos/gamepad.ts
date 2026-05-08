export type Direccion =
  | "izquierda"
  | "derecha"
  | "arriba"
  | "abajo";

export type TipoInput =
  | "movimiento"
  | "salto";

export type EstadoInput =
  | "keydown"
  | "keyup";

export interface GamepadComando {
  tipo: TipoInput;
  estado: EstadoInput;

  direccion?: Direccion;

  clienteId: string;
}

export interface EstadoConexion {
  conectado: boolean;
  ip: string;
  clienteId?: string;
}
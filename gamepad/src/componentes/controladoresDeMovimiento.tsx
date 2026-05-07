import { View, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  alPresionarIzquierda: () => void;
  alSoltarIzquierda: () => void;

  alPresionarDerecha: () => void;
  alSoltarDerecha: () => void;
};

export default function ControlesDeMovimiento({
  alPresionarIzquierda,
  alSoltarIzquierda,

  alPresionarDerecha,
  alSoltarDerecha,
}: Props) {
  return (
    <View style={styles.contenedor}>
      <Pressable
        style={styles.boton}
        onPressIn={alPresionarIzquierda}
        onPressOut={alSoltarIzquierda}
      >
        <Text style={styles.texto}>←</Text>
      </Pressable>

      <Pressable
        style={styles.boton}
        onPressIn={alPresionarDerecha}
        onPressOut={alSoltarDerecha}
      >
        <Text style={styles.texto}>→</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    gap: 20,
  },

  boton: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  alPresionar: () => void;
  alSoltar: () => void;
};

export default function BotonDeSalto({
  alPresionar,
  alSoltar,
}: Props) {
  return (
    <Pressable
      style={styles.boton}
      onPressIn={alPresionar}
      onPressOut={alSoltar}
    >
      <Text style={styles.texto}>A</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: 110,
    height: 110,
    borderRadius: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },

  texto: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
  },
});
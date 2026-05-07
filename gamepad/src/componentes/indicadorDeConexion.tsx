import { Text, View, StyleSheet } from "react-native";

type Props = {
  estado: string;
};

export default function IndicadorDeConexion({ estado }: Props) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>
        Estado: {estado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    marginTop: 40,
  },

  texto: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
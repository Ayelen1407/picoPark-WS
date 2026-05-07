import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export default function Contenedor({ children }: Props) {
  return (
    <View style={styles.contenedor}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#111",
    padding: 30,
    justifyContent: "space-between",
  },
});
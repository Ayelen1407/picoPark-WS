import { View, Text, StyleSheet } from "react-native";

export default function gamePad() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pico Park GamePad</Text>

      <View style={styles.controls}>
        <Text style={styles.button}>←</Text>

        <Text style={styles.button}>→</Text>
      </View>

      <Text style={styles.jump}>A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  controls: {
    flexDirection: "row",
    gap: 30,
  },

  button: {
    backgroundColor: "#333",
    color: "white",
    fontSize: 40,
    width: 80,
    height: 80,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 20,
  },

  jump: {
    backgroundColor: "#f59e0b",
    color: "white",
    fontSize: 40,
    width: 100,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 20,
  },
});


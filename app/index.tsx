import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen123.
      </Text>
      <Text>Helloooo</Text>
      <Link href="/about">Visit la page about</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "palegreen",
  },
  content: {
    fontSize: 20,
    color: "darkred",
  },
});

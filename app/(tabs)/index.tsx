import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen123.
      </Text>
      <Text>Helloooo</Text>
      <Link href="/about">Visit la page about</Link>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "palegreen",
  },
  content: {
    fontSize: 20,
    color: "darkred",
  },
});

import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos)
  console.log("Todos:", todos);

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos);
  

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
      {/* <TouchableOpacity onPress={()=> addTodo({ text: "Titiiii !" })}>;
      
        <Text>Add a new TODO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> clearAllTodos()}>;
      
        <Text>Clear all the todos</Text>
      </TouchableOpacity> */}
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

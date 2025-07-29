import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  // const styles = createStyles(colors);
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos)
  console.log("Todos:", todos);

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos);
  

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>

    <SafeAreaView style={homeStyles.safeArea}>
      <Text style={homeStyles.loadingText}>
        Edit app/index.tsx to edit this screen123.
      </Text>
      <Text style={homeStyles.loadingText}>Helloooo</Text>
      <Link href="/about">Visit la page about</Link>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={homeStyles.loadingText}>Toggle Dark Mode</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={()=> addTodo({ text: "Titiiii !" })}>;
      
      <Text>Add a new TODO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> clearAllTodos()}>;
      
      <Text>Clear all the todos</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  </LinearGradient>
  );
}


// const createStyles = (colors : ColorScheme ) => {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: colors.bg,
//     },
//     content: {
//       fontSize: 20,
//       color: colors.text,
//     },
//   });
//   return styles;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "palegreen",
//   },
//   content: {
//     fontSize: 20,
//     color: "darkred",
//   },
// });

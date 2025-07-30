import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  // const styles = createStyles(colors);
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  console.log("Todos:", todos);

  const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined;

  const handleToggleTodo = async (id: Id<"todos">) => {
    // Call the API to toggle the todo's completion status
    try {
      await toggleTodo({ todoId: id });
    } catch (error) {
      console.error("Erreur lors du basculement de la tâche: ", error);
      Alert.alert("Erreur", "Echec du basculement de la tâche.");
      // Optionally, you can show an alert or a toast message to the user
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const renderTodoItem = ({ item }: { item: Todo }) => (
    <View style={homeStyles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={homeStyles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={homeStyles.checkbox}
          activeOpacity={0.7}
          onPress={() => {
            handleToggleTodo(item._id);
          }}
        >
          <LinearGradient
            colors={
              item.isCompleted
                ? colors.gradients.success
                : colors.gradients.muted
            }
            style={[
              homeStyles.checkboxInner,
              { borderColor: item.isCompleted ? "transparent" : colors.border },
            ]}
          >
            {item.isCompleted && (
              <Ionicons name="checkmark" size={24} color={colors.text} />
            )}
          </LinearGradient>
        </TouchableOpacity>
        <View style={homeStyles.todoTextContainer}>
          <Text
            style={[
              homeStyles.todoText,
              item.isCompleted && {
                textDecorationLine: "line-through",
                color: colors.textMuted,
                opacity: 0.6,
              },
            ]}
          >
            {item.text}
          </Text>
          <View style={homeStyles.todoActions}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <LinearGradient
                colors={colors.gradients.warning}
                style={homeStyles.actionButton}
              >
                <Ionicons name="pencil" size={16} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <LinearGradient
                colors={colors.gradients.danger}
                style={homeStyles.actionButton}
              >
                <Ionicons name="trash" size={16} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  // const addTodo = useMutation(api.todos.addTodo)
  // const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView style={homeStyles.safeArea}>
        <Text style={homeStyles.loadingText}>
          Edit app/index.tsx to edit this screen123.
        </Text>
        <Text style={homeStyles.loadingText}>Helloooo</Text>
        <Header />

        <TodoInput />

        {/* {todos?.map((todo) => (
          <Text key={todo._id} style={homeStyles.todoText}>
            {todo.text} - {todo.isCompleted ? "Completed" : "Pending"}
          </Text>
        ))} */}
        {/* Meme chose avec FlatList */}
        {/* <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Text key={item._id} style={homeStyles.todoText}>
              {item.text} - {item.isCompleted ? "Completed" : "Pending"}
            </Text>
          )}
        /> */}

        {/* Version avec FlatList optimisée */}
        <FlatList
          data={[]}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          //Pour ne pas afficher le scroll mais il existe (performance)
          // showsVerticalScrollIndicator={false}
        />

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

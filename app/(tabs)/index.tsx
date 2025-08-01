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
import { useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { colors } = useTheme();

  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  // const styles = createStyles(colors);
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  // console.log("Todos:", todos);

  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const isLoading = todos === undefined;

  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ todoId: id });
    } catch (error) {
      console.error("Erreur lors du basculement de la tâche: ", error);
      Alert.alert("Erreur", "Echec du basculement de la tâche.");
    }
  };

  const handleDeleteTodo = async (id: Id<"todos">) => {
    Alert.alert(
      "Supprimer la tâche",
      "Êtes-vous sûr de vouloir supprimer cette tâche ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteTodo({ todoId: id });
            } catch (error) {
              console.error(
                "Erreur lors de la suppression de la tâche: ",
                error
              );
              Alert.alert("Erreur", "Echec de la suppression de la tâche.");
            }
          },
        },
      ]
    );
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingText(todo.text);
    setEditingId(todo._id);
  };
  const handleSave = async () => {
    if (editingId) {
      try {
        await updateTodo({ id: editingId, text: editingText.trim() });
        setEditingId(null);
        setEditingText("");
      } catch (error) {
        console.error("Erreur lors de la sauvegarde de la tâche: ", error);
        Alert.alert("Erreur", "Echec de la sauvegarde de la tâche.");
      }
    }
  };
  const handleCancelEdit = (todo: Todo) => {
    setEditingId(null);
    setEditingText("");
  };

  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editingId === item._id;

    return (
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
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={24} color={colors.text} />
              )}
            </LinearGradient>
          </TouchableOpacity>

          {isEditing ? (
            <View style={homeStyles.editContainer}>
              <TextInput
                style={homeStyles.editInput}
                value={editingText}
                onChangeText={setEditingText}
                autoFocus
                placeholder="Modifier la tâche..."
                placeholderTextColor={colors.textMuted}
                multiline
              />
              <View style={homeStyles.editButtons}>
                <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
                  <LinearGradient
                    colors={colors.gradients.success}
                    style={homeStyles.editButton}
                  >
                    <Ionicons name="checkmark" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Sauver</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleCancelEdit(item)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={colors.gradients.muted}
                    style={homeStyles.editButton}
                  >
                    <Ionicons name="close" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Annuler</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
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
                <TouchableOpacity
                  onPress={() => {
                    handleEditTodo(item);
                  }}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={colors.gradients.warning}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="pencil" size={16} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleDeleteTodo(item._id);
                  }}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="trash" size={16} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </LinearGradient>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TodoInput />

        {/* Version avec FlatList optimisée */}
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          //Pour ne pas afficher le scroll mais il existe (performance)
          // showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

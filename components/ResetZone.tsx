import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation } from "convex/react";
import React from "react";
import { Alert, Text, View } from "react-native";

const ResetZone = () => {
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);

  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const handleResetApp = async () => {
    Alert.alert(
      "Reset Appli",
      "⚠️ Êtes-vous sûr de vouloir réinitialiser l'application ? Toutes les tâches seront supprimées. ⚠️",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Réinitialiser",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos();
              Alert.alert(
                "Réinitialisation réussie",
                ` ${result.deletedCount} tâche${result.deletedCount === 1 ? "" : "s"} ont été supprimées avec succès. Votre application a bien été réinitialisée.`
              );
              console.log("====================================");
              console.log("App reset successfully:", result);
              console.log("====================================");
            } catch (error) {
              console.log("====================================");
              console.log("Error resetting app:", error);
              console.log("====================================");
              Alert.alert(
                "Erreur",
                "Une erreur est survenue lors de la réinitialisation de l'application. Veuillez réessayer plus tard."
              );
            }
          },
        },
      ]
    );
  };
  return (
    <View>
      <Text>ResetZone</Text>
    </View>
  );
};

export default ResetZone;

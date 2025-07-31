import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

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
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitleDanger}>Réinitialisation</Text>

      <TouchableOpacity
        style={[settingsStyle.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingsStyle.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyle.actionIcon}
          >
            <Ionicons name="trash" size={24} color="#ffffff" />
          </LinearGradient>
          <Text style={settingsStyle.actionTextDanger}>
            Réinitialiser l&apos;Appli
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ResetZone;

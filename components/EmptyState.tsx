import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const EmptyState = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.emptyContainer}>
      <LinearGradient
        colors={colors.gradients.empty}
        style={homeStyles.emptyIconContainer}
      >
        <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
      </LinearGradient>
      <Text style={homeStyles.emptyText}>Pas de tâches encore !</Text>
      <Text style={homeStyles.emptySubtext}>
        Ajoutez votre première tâche ci-dessus.
      </Text>
    </View>
  );
};

export default EmptyState;

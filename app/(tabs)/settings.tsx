import { createSettingsStyles } from "@/assets/styles/settings.styles";
import Preferences from "@/components/Preferences";
import ProgressStats from "@/components/ProgressStats";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {

  

  const {colors} = useTheme();
  const settingsStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyle.container}
    >
      <SafeAreaView style={settingsStyle.safeArea}>
        {/* HEADER */}
        <View style={settingsStyle.header}>
          <View style={settingsStyle.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyle.iconContainer}
            >
              <Ionicons name="settings" size={32} color={colors.text} />
            </LinearGradient>
            <Text style={settingsStyle.title}>Réglages</Text>

          </View>
        </View>
        {/* SETTINGS OPTIONS */}
        <ScrollView
          style={settingsStyle.scrollView}
          contentContainerStyle={settingsStyle.content}
          showsVerticalScrollIndicator={false}
        >
          {/* INFOS */}
          <ProgressStats/>

          {/* PREFERENCES */}
          <Preferences/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsScreen;

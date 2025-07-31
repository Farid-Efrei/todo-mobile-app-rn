import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const settingsStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Preferences</Text>

      {/* DARK MODE */}
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyle.iconContainer}
          >
            <Ionicons name="moon" size={28} color={colors.text} />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Mode Sombre</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"pink"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={"red"}
        />
      </View>

      {/* NOTIFS */}
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyle.iconContainer}
          >
            <Ionicons name="notifications" size={28} color={colors.text} />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          thumbColor={"pink"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={"red"}
        />
      </View>

      {/* AUTO SYNC */}
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyle.iconContainer}
          >
            <Ionicons name="sync" size={28} color={colors.text} />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Auto Synchro</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"pink"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={"red"}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;

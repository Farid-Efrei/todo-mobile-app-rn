import { createSettingsStyles } from '@/assets/styles/settings.styles';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text } from 'react-native';

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const {isDarkMode, toggleDarkMode, colors} = useTheme();

  const settingsStyle = createSettingsStyles(colors)


  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Preferences</Text>
    </LinearGradient>
  )
}

export default Preferences
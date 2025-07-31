import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const ProgressStats = () => {
    const {colors} = useTheme();
    const settingsStyle = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos)
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter(todo => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completedTodos;

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>
        Stats de Progression
      </Text>


      {/* TOTAL TODOS */}
      <LinearGradient
        colors={colors.gradients.background}
        style={[settingsStyle.statCard, {borderLeftColor: colors.primary}]}
      >
        <View style={settingsStyle.statIconContainer}>
      <LinearGradient
        colors={colors.gradients.primary}
        style={settingsStyle.statIcon}
      >
        <Ionicons name='list' size={24} color={colors.text} />
      </LinearGradient>
        </View>

        <View >
          <Text style={settingsStyle.statNumber}>{totalTodos}</Text>
          <Text style={settingsStyle.statLabel}>Tâches totales</Text>

        </View>

      </LinearGradient>
    </LinearGradient>
  )
}

export default ProgressStats
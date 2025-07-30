import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import {
  Colors,
  ComponentStyles,
  DarkModeStyles,
  Typography,
  Spacing,
} from '@/constants/GeologicaUIKit';

export type NavItem = {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  label: string;
  active?: boolean;
};

export default function BottomNavigation({ items }: { items: NavItem[] }) {
  return (
    <View style={[styles.container, ComponentStyles.tabBar, DarkModeStyles.tabBar]}>
      {items.map((item) => (
        <Pressable key={item.label} style={ComponentStyles.tabItem}>
          <MaterialIcons
            name={item.icon}
            size={24}
            color={item.active ? Colors.dark.primary : Colors.dark.textSecondary}
          />
          <ThemedText
            style={[
              styles.label,
              DarkModeStyles.tabLabel,
              item.active && DarkModeStyles.tabLabelActive,
            ]}
          >
            {item.label}
          </ThemedText>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xs,
    color: Colors.dark.textSecondary,
    marginTop: Spacing.xs,
  },
});

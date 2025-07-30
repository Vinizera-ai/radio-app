import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { Colors, Spacing, Typography } from '@/constants/GeologicaUIKit';

export type NavItem = {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  label: string;
  active?: boolean;
};

export default function BottomNavigation({ items }: { items: NavItem[] }) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Pressable key={item.label} style={styles.item}>
          <MaterialIcons
            name={item.icon}
            size={24}
            color={item.active ? Colors.light.primary : Colors.dark.white}
          />
          <ThemedText style={[styles.label, item.active && styles.activeLabel]}>
            {item.label}
          </ThemedText>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.dark.secondary,
  },
  item: {
    alignItems: 'center',
    padding: Spacing.sm,
  },
  label: {
    fontSize: Typography.sizes.xs,
    color: Colors.dark.white,
    marginTop: Spacing.xs,
  },
  activeLabel: {
    color: Colors.light.primary,
  },
});

import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

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
            color={item.active ? '#1F6AF0' : 'white'}
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
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  item: {
    alignItems: 'center',
    padding: 8,
  },
  label: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  activeLabel: {
    color: '#1F6AF0',
  },
});

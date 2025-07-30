import { Image, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';

export default function TopBar({
  title,
  subtitle,
  avatarUrl,
}: {
  title: string;
  subtitle?: string;
  avatarUrl?: string;
}) {
  return (
    <View style={styles.container}>
      <IconSymbol name="chevron.right" size={24} color="white" />
      <View style={styles.textContainer}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}
      </View>
      {avatarUrl && <Image source={{ uri: avatarUrl }} style={styles.avatar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

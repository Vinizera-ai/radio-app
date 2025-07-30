import { Image, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import {
  Colors,
  Spacing,
  Typography,
  BorderRadius,
} from '@/constants/GeologicaUIKit';

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
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  textContainer: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  title: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.fontWeights.semibold as any,
    color: Colors.dark.white,
  },
  subtitle: {
    fontSize: Typography.sizes.sm,
    color: Colors.dark.white,
    opacity: 0.8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
  },
});

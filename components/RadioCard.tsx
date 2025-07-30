import { Image } from 'expo-image';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/GeologicaUIKit';

export default function RadioCard({
  image,
  stationName,
  currentSong,
}: {
  image: string;
  stationName: string;
  currentSong: string;
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} contentFit="cover" />
      <ThemedText style={styles.station}>{stationName}</ThemedText>
      <ThemedText style={styles.song}>{currentSong}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.md,
  },
  station: {
    fontSize: Typography.sizes.xxl,
    fontWeight: Typography.fontWeights.bold as any,
    color: Colors.dark.white,
    textAlign: 'center',
  },
  song: {
    fontSize: Typography.sizes.sm,
    color: Colors.dark.quaternary,
    opacity: 0.8,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
});

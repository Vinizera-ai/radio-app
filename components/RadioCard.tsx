import { Image } from 'expo-image';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

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
    marginVertical: 24,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  station: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  song: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
    marginTop: 4,
    textAlign: 'center',
  },
});

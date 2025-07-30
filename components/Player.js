import { Audio } from 'expo-av';
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { STREAM_URL } from '@/utils/constants';

export default function Player() {
  const [sound, setSound] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(1);

  async function loadSound() {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: STREAM_URL },
      { shouldPlay: true, volume }
    );
    setSound(playbackObject);
    setIsPlaying(true);
  }

  async function togglePlayback() {
    if (!sound) {
      await loadSound();
      return;
    }
    const status = await sound.getStatusAsync();
    if (status.isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  async function adjustVolume(change) {
    let newVolume = Math.min(1, Math.max(0, volume + change));
    setVolume(newVolume);
    if (sound) {
      await sound.setVolumeAsync(newVolume);
    }
  }

  React.useEffect(() => {
    return () => {
      sound?.unloadAsync();
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
      <View style={styles.volumeRow}>
        <Button title="-" onPress={() => adjustVolume(-0.1)} />
        <Button title="+" onPress={() => adjustVolume(0.1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  volumeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
});

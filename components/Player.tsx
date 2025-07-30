import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { STREAM_URL } from '@/utils/constants';

export default function Player() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const scale = useSharedValue(1);

  async function loadSound() {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: STREAM_URL },
      { shouldPlay: true }
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

  useEffect(() => {
    return () => {
      sound?.unloadAsync();
    };
  }, [sound]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={() => {
          scale.value = withTiming(0.9);
        }}
        onPressOut={() => {
          scale.value = withTiming(1);
        }}
        onPress={togglePlayback}
        style={styles.pressable}>
        <Animated.View style={[styles.button, animatedStyle]}>
          <MaterialIcons
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={64}
            color="white"
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    borderRadius: 50,
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

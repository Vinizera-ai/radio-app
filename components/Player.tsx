import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { STREAM_URL } from '@/utils/constants';
import {
  Colors,
  ComponentStyles,
  DarkModeStyles,
  BorderRadius,
} from '@/constants/GeologicaUIKit';

export type PlayerProps = {
  buttonSize?: number;
  iconSize?: number;
};

export default function Player({ buttonSize = 100, iconSize = 64 }: PlayerProps) {
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
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
        <Animated.View
          style={[
            styles.button,
            {
              height: buttonSize,
              width: buttonSize,
              borderRadius: buttonSize / 2,
            },
            animatedStyle,
          ]}
        >
          <MaterialIcons
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={iconSize}
            color={Colors.dark.white}
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
    borderRadius: BorderRadius.full,
  },
  button: {
    ...ComponentStyles.primaryButton,
    ...DarkModeStyles.primaryButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    ...ComponentStyles.primaryButtonPressed,
    ...DarkModeStyles.primaryButton,
  },
});

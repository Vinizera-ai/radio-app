import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedBackground from './AnimatedBackground';
import Player from './Player';
import { ThemedText } from './ThemedText';
import { RADIO_STATION } from '@/utils/constants';

export default function FullScreenPlayer() {
  return (
    <AnimatedBackground>
      <View style={styles.content}>
        <Image source={{ uri: RADIO_STATION.logoUrl }} style={styles.logo} />
        <ThemedText type="title" style={styles.title}>
          {RADIO_STATION.name}
        </ThemedText>
        <Player />
      </View>
    </AnimatedBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
});

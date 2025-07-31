import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Player from './Player';
import {
  Colors,
  Typography,
  Spacing,
} from '@/constants/GeologicaUIKit';
import { startCarPlay, startAndroidAuto } from '@/services/carIntegration';

export default function CarDisplay() {
  useEffect(() => {
    startCarPlay();
    startAndroidAuto();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Car Display</Text>
      <View style={styles.playerContainer}>
        <Player buttonSize={120} iconSize={64} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xxxl,
    color: Colors.dark.text,
    marginBottom: Spacing.lg,
  },
  playerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {
  BorderRadius,
  Colors,
  ComponentStyles,
  DarkModeStyles,
  Spacing,
  Typography,
} from '@/constants/GeologicaUIKit';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Player from './Player';

export default function FullScreenPlayer() {
  const leftScale = useSharedValue(1);
  const rightScale = useSharedValue(1);

  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ scale: leftScale.value }],
  }));

  const rightStyle = useAnimatedStyle(() => ({
    transform: [{ scale: rightScale.value }],
  }));

  return (
    <SafeAreaView style={[styles.container, ComponentStyles.darkContainer]}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.dark.white} />
        </Pressable>
        <Text style={styles.headerTitle}>Top Playlist</Text>
        <Pressable style={styles.headerButton}>
          <MaterialIcons name="person" size={24} color={Colors.dark.white} />
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>99.5 FM</Text>
      </View>

      <View style={styles.trackInfo}>
        <Text style={styles.songTitle}>Rádio Muriaé</Text>
        <Text style={styles.station}>99.5 FM</Text>
      </View>

      <View style={styles.controls}>
        <Pressable
          onPressIn={() => (leftScale.value = withTiming(0.9))}
          onPressOut={() => (leftScale.value = withTiming(1))}
          style={({ pressed }) => [styles.iconButton, pressed && styles.iconPressed]}
        >
          <Animated.View style={leftStyle}>
            <MaterialIcons name="directions-car" size={32} color={Colors.dark.white} />
          </Animated.View>
        </Pressable>

        <Player buttonSize={48} iconSize={32} />

        <Pressable
          onPressIn={() => (rightScale.value = withTiming(0.9))}
          onPressOut={() => (rightScale.value = withTiming(1))}
          style={({ pressed }) => [styles.iconButton, pressed && styles.iconPressed]}
        >
          <Animated.View style={rightStyle}>
            <MaterialIcons name="favorite-border" size={32} color={Colors.dark.white} />
          </Animated.View>
        </Pressable>
      </View>

      <View style={styles.extraControls}>
        <Pressable style={({ pressed }) => [styles.iconButton, pressed && styles.iconPressed]}>
          <MaterialIcons name="cast" size={24} color={Colors.dark.white} />
        </Pressable>
        <Pressable style={({ pressed }) => [styles.iconButton, pressed && styles.iconPressed]}>
          <MaterialIcons name="more-horiz" size={24} color={Colors.dark.white} />
        </Pressable>
      </View>

    
    </SafeAreaView>
  );
}

const CARD_SIZE = 280;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  headerTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.fontWeights.semibold as any,
    color: Colors.dark.white,
  },
  headerButton: {
    padding: Spacing.sm,
  },
  card: {
    ...ComponentStyles.card,
    ...DarkModeStyles.darkCard,
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: BorderRadius.lg,
    backgroundColor: '#dc2626',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.xl,
  },
  cardText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xxl,
    fontWeight: Typography.fontWeights.bold as any,
    color: Colors.dark.white,
  },
  trackInfo: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  songTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.fontWeights.semibold as any,
    color: Colors.dark.text,
  },
  station: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    color: Colors.dark.textSecondary,
    opacity: 0.7,
    marginTop: Spacing.xs,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  iconButton: {
    padding: Spacing.sm,
  },
  iconPressed: {
    opacity: 0.7,
  },
  extraControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Spacing.lg,
  },
});

import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import Player from './Player';
import { Spacing } from '@/constants/GeologicaUIKit';

export default function PlaybackControls() {
  const leftScale = useSharedValue(1);
  const rightScale = useSharedValue(1);

  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ scale: leftScale.value }],
  }));

  const rightStyle = useAnimatedStyle(() => ({
    transform: [{ scale: rightScale.value }],
  }));

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconButton}
        onPressIn={() => (leftScale.value = withTiming(0.9))}
        onPressOut={() => (leftScale.value = withTiming(1))}
      >
        <Animated.View style={leftStyle}>
          <MaterialIcons name="directions-car" size={28} color="white" />
        </Animated.View>
      </Pressable>
      <Player />
      <Pressable
        style={styles.iconButton}
        onPressIn={() => (rightScale.value = withTiming(0.9))}
        onPressOut={() => (rightScale.value = withTiming(1))}
      >
        <Animated.View style={rightStyle}>
          <MaterialIcons name="favorite-border" size={28} color="white" />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: Spacing.lg,
  },
  iconButton: {
    padding: Spacing.sm,
  },
});

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function AnimatedBackground({ children }: React.PropsWithChildren<{}>) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 8000 }), -1, true);
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 0.5, 1],
      ['#0a7ea4', '#502c9e', '#0a7ea4']
    ),
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

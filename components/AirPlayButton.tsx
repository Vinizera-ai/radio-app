import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { startAirPlay } from '@/services/airplay';

let AirPlay: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AirPlay = require('react-native-airplay-btn');
} catch {
  AirPlay = null;
}

export type AirPlayButtonProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

/**
 * Display the native AirPlay button when the library is installed. Falls back
 * to a simple icon that triggers the provided `onPress` handler otherwise.
 */
export default function AirPlayButton({
  color = 'white',
  size = 24,
  style,
  onPress,
}: AirPlayButtonProps) {
  if (AirPlay?.AirPlayButton) {
    return <AirPlay.AirPlayButton style={style} activeTintColor={color} />;
  }
  return (
    <Pressable onPress={onPress ?? startAirPlay} style={style}>
      <MaterialIcons name="airplay" size={size} color={color} />
    </Pressable>
  );
}

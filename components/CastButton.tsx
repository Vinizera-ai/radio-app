import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

let GoogleCast: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  GoogleCast = require('react-native-google-cast');
} catch {
  GoogleCast = null;
}

export type CastButtonProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

/**
 * Display the native Google Cast button when the library is installed. Falls
 * back to a simple icon that triggers the provided `onPress` handler otherwise.
 */
export default function CastButton({
  color = 'white',
  size = 24,
  style,
  onPress,
}: CastButtonProps) {
  if (GoogleCast?.CastButton) {
    return <GoogleCast.CastButton style={style} tintColor={color} />;
  }
  return (
    <Pressable onPress={onPress} style={style}>
      <MaterialIcons name="cast" size={size} color={color} />
    </Pressable>
  );
}

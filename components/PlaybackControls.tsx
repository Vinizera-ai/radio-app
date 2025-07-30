import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Player from './Player';

export default function PlaybackControls() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconButton} onPress={() => {}}>
        <MaterialIcons name="directions-car" size={28} color="white" />
      </Pressable>
      <Player />
      <Pressable style={styles.iconButton} onPress={() => {}}>
        <MaterialIcons name="favorite-border" size={28} color="white" />
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
    paddingVertical: 16,
  },
  iconButton: {
    padding: 8,
  },
});

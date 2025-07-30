import { Audio } from 'expo-av';
import React from 'react';
import { Button, View } from 'react-native';

export default function Player() {
  const [sound, setSound] = React.useState();
  const streamUrl = "https://your-icecast-url.com/live";

  async function playStream() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: streamUrl },
      { shouldPlay: true }
    );
    setSound(sound);
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Play Radio" onPress={playStream} />
    </View>
  );
}
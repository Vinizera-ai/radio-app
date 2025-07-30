import { View, StyleSheet } from 'react-native';
import TopBar from '@/components/TopBar';
import RadioCard from '@/components/RadioCard';
import PlaybackControls from '@/components/PlaybackControls';
import AnimatedBackground from '@/components/AnimatedBackground';
import { RADIO_STATION } from '@/utils/constants';
import { Spacing } from '@/constants/GeologicaUIKit';

export default function HomeScreen() {
  return (
    <AnimatedBackground>
      <View style={styles.container}>
        <TopBar title="Top" subtitle="Playlist" avatarUrl={RADIO_STATION.logoUrl} />
        <RadioCard
          image={RADIO_STATION.logoUrl}
          stationName="99.5 FM"
          currentSong="O Sol - Vitor Klei"
        />
        <PlaybackControls />
      </View>
    </AnimatedBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Spacing.xl,
  },
});

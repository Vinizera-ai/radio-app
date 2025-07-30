import { View, StyleSheet } from 'react-native';
import TopBar from '@/components/TopBar';
import RadioCard from '@/components/RadioCard';
import PlaybackControls from '@/components/PlaybackControls';
import BottomNavigation from '@/components/BottomNavigation';
import { RADIO_STATION } from '@/utils/constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopBar title="Top" subtitle="Playlist" avatarUrl={RADIO_STATION.logoUrl} />
      <RadioCard
        image={RADIO_STATION.logoUrl}
        stationName="99.5 FM"
        currentSong="O Sol - Vitor Klei"
      />
      <PlaybackControls />
      <BottomNavigation
        items={[
          { icon: 'radio', label: 'Radio', active: true },
          { icon: 'article', label: 'Not\u00edcias' },
          { icon: 'person', label: 'Conta' },
          { icon: 'settings', label: 'Config' },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081023',
    paddingTop: 40,
  },
});

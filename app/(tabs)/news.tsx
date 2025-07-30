import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <ThemedText>News Screen</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#081023',
  },
});

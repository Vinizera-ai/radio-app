import analytics from '@react-native-firebase/analytics';

export async function logEvent(name, params = {}) {
  await analytics().logEvent(name, params);
}

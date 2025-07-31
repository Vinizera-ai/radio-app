let AirPlay;
try {
  // Dynamically require so the app still bundles without the native module
  AirPlay = require('react-native-airplay-btn');
} catch (e) {
  AirPlay = null;
}

/**
 * Attempt to show the AirPlay route picker. If the library is not installed,
 * the request is logged so the app can continue to run without crashing.
 */
export async function startAirPlay() {
  if (!AirPlay) {
    console.log('AirPlay requested');
    return;
  }

  try {
    if (AirPlay.showRoutePicker) {
      await AirPlay.showRoutePicker();
    }
  } catch (err) {
    console.warn('Failed to start AirPlay', err);
  }
}

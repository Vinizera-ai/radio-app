let CarPlay;
try {
  CarPlay = require('react-native-carplay');
} catch (e) {
  CarPlay = null;
}

let AndroidAuto;
try {
  AndroidAuto = require('react-native-android-auto');
} catch (e) {
  AndroidAuto = null;
}

/**
 * Start CarPlay integration when available. Logs a request when the
 * native module is missing so the app can continue to run.
 */
export async function startCarPlay() {
  if (!CarPlay) {
    console.log('CarPlay integration requested');
    return;
  }

  try {
    if (CarPlay.register) {
      await CarPlay.register();
    }
  } catch (err) {
    console.warn('Failed to start CarPlay', err);
  }
}

/**
 * Start Android Auto integration when available. Logs a request when the
 * native module is missing so the app can continue to run.
 */
export async function startAndroidAuto() {
  if (!AndroidAuto) {
    console.log('Android Auto integration requested');
    return;
  }

  try {
    if (AndroidAuto.initialize) {
      await AndroidAuto.initialize();
    }
  } catch (err) {
    console.warn('Failed to start Android Auto', err);
  }
}

let GoogleCast;
try {
  // Dynamically require so the app still bundles without the native module
  GoogleCast = require('react-native-google-cast');
} catch (e) {
  GoogleCast = null;
}

/**
 * Start casting the provided audio stream using react-native-google-cast when
 * available. If the library is not installed, the request is logged so the app
 * can continue to run without crashing.
 */
export async function startScreencast(streamUrl) {
  if (!GoogleCast) {
    console.log('Screencast requested for', streamUrl);
    return;
  }

  try {
    // Show the device picker so the user can choose where to cast
    if (GoogleCast.showCastPicker) {
      await GoogleCast.showCastPicker();
    }

    const client =
      GoogleCast.getCastContext?.()
        ?.getSessionManager?.()
        ?.getCurrentSession?.()
        ?.getRemoteMediaClient?.();

    if (client?.loadMedia) {
      await client.loadMedia({
        mediaInfo: {
          contentUrl: streamUrl,
          contentType: 'audio/mpeg',
          streamType: 'LIVE',
          metadata: { mediaType: GoogleCast.MediaTypes.AUDIO },
        },
      });
    } else if (GoogleCast.castMedia) {
      // Fallback for older versions of the library
      await GoogleCast.castMedia({
        mediaUrl: streamUrl,
        title: 'Radio Stream',
        contentType: 'audio/mpeg',
        streamType: 'LIVE',
      });
    }
  } catch (err) {
    console.warn('Failed to start screencast', err);
  }
}

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const VideoPlayerScreen = () => {
  const route = useRoute<any>();

  const { url } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} javaScriptEnabled domStorageEnabled />
    </SafeAreaView>
  );
};

export default VideoPlayerScreen;

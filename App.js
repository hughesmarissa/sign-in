import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

//import fonts
import { useFonts } from 'expo-font';
import { 
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'
  

export default function App() {
    let [fontsLoaded, error] = useFonts({
        Regular: DancingScript_400Regular,
        Medium: DancingScript_500Medium,
        SemiBold: DancingScript_600SemiBold,
        Bold: DancingScript_700Bold,
        'Bakbak-One': require('./assets/fonts/BakbakOne-Regular.ttf'),
        'KaushanScript': require('./assets/fonts/KaushanScript-Regular.ttf'),
        'Playfair-Italic': require('./assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
    });
if (!fontsLoaded) {
    return <AppLoading />
}

  return (
    <View style={styles.container}>
      <Text 
            style={{ 
            fontFamily: 'Playfair-Italic', 
            fontSize: 60 }}
        >Sign-in
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation'
import axios from 'axios'
import {

  AppState,
  Linking,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
 import linking from "./src/navigation/Linking";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { navigationRef } from './src/navigation/RootNavigaton'
axios.defaults.baseURL =
  //'https://europe-west1-socialape-d081e.cloudfunctions.net/api';
  'https://asia-south1-socialape-b910e.cloudfunctions.net/api';



  const App = (props:any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [initialised, setInitialised] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    if (Linking.getInitialURL() !== null) {
      AppState.removeEventListener('change', handleAppStateChange);
    }
  }, []);
  const handleAppStateChange = async (event) => {
    console.log('handleAppStateChange listerner added===')
    const initial = await Linking.getInitialURL();
    console.log("handleAppStateChange====", { initial, event, initialised });
    if (initial !== null && !initialised) {
      setInitialised(true);
      // app was opened by a Universal Link
      // custom setup dependant on URL...
    }
  }
  //
  return (
    <Provider store={store}>
      <Navigation ref={navigationRef}  colorScheme={'light'} uriPrefixe={linking.prefixes} linking={linking} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

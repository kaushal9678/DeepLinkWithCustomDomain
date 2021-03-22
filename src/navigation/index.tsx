import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Linking } from "react-native";
//import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigation";

import { useEffect, useRef } from "react";
//import LinkingConfiguration from './Linking'
import * as RootNavigation from './RootNavigaton';
import linking from "./Linking";
import { INavigationContainer } from '../interface/IInterface'
import DeepLinking from 'react-native-deep-linking';
import DynamicLinksHandle from "../DynamicLinksHandle/DynamicLinksHandle";


const ThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,

  },
};
const ThemeLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

  },
};

//const Navigation: React.FunctionComponent<INavigationContainer> = (props) => {
  const Navigation:React.FunctionComponent<INavigationContainer> = React.forwardRef((props, ref) =>{
    console.log("props and ref==",{props,ref})

  const handleUrl = ({ url }) => {
    console.log("handle url==", url);
    Linking.canOpenURL(url).then((supported) => {
      console.log("supported==",supported)
      if (supported) {
        DeepLinking.evaluateUrl(url);
      
        if (url.includes('/users')) {
          console.log("url includes called==");
          Linking.openURL('deeplink://users/cEogXfUy7VgiKZCxCO3n')
          //RootNavigation.navigate('JobDetail',{screamId:'cEogXfUy7VgiKZCxCO3n'})
      }
    }
    });
  };
  DeepLinking.addRoute('/users/:screamId', ({users,screamId}) => {
    // example://test
    console.log("response===", users,screamId);
    //this.setState({ response });
  });
  const navigationRef = useRef();
  const routeNameRef = useRef();
  
  useEffect(() => {
    // Get the deep link used to open the app
    DeepLinking.addScheme('deeplink://');
    console.log("called useeffect of navigation container");

    Linking.addEventListener('url', handleUrl);
    return () => {
      Linking.removeEventListener('url', handleUrl);
    }
  }

  );

  return (

    <NavigationContainer
      uriPrefix={props.uriPrefixe}//{linking.prefixes}
      linking={props.linking}//{linking}
      //theme={colorScheme === "dark" ? ThemeDark : ThemeLight}
      ref={ref}

    >
      <RootNavigator />
     
    </NavigationContainer>

  );
  
})

export default Navigation;
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator()//<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      {/* <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{title: 'Oops!'}}
        /> */}
    </Stack.Navigator>
  );
}


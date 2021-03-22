import { AppRegistry, Platform, View } from "react-native";
import React, { useEffect, FunctionComponent } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";


const DynamicLinksHandle: FunctionComponent = (props) => {
   console.log("props DynamicLinksHandle: ",props)
   const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
   // alert(JSON.stringify(link.url));
   console.log("DynamicLinksHandle called==",link)
    if (link.url === 'https://invertase.io/offer') {
      // ...navigate to your offers screen

    }
  };


  useEffect(() => {
//    const unsubscribeForeGround = dynamicLinks().onLink(handleDynamicLink);
    // dynamicLinks().getInitialLink().then(link=>alert(link.url));
    // When the component is unmounted, remove the listener
    return () => {
      //unsubscribeForeGround();
      //unsubscribeBackground()
    };
  }, []);
  return null;
};

export default DynamicLinksHandle;

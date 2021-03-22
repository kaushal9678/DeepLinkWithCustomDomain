import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Jobs from '../pages/jobs/Jobs';
import Profile from '../pages/profile/Profile'
import Resume from '../pages/resume'
import Message from '../pages/message/Message'
import Settings from '../pages/settings/Settings'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { JobStack, MessageStack, ProfileStack, ResumeStack, SettingsStack } from './navigation';
import React, { FunctionComponent } from 'react';
import { NavigationIconProps } from './TabProps';
import { Platform, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';


const Tab = createMaterialBottomTabNavigator();

const NavigationIcons: FunctionComponent<NavigationIconProps> = (props) => {
  const { colors } = useTheme();
  const params = {
    width: Platform.OS == "ios" ? 26 : 24,
    height: Platform.OS == "ios" ? 26 : 24,
    isFocused: props.focused,
   
  };

  return (
    <View style={styles.barIcon}>
      {props.routeName === "Jobs" ? (
       <MaterialIcons name='rss-feed' size={20}/>
      ) : props.routeName === "Resume" ? (
        <MaterialIcons name='business-center' size={20}/>
      ) : props.routeName === "Profile" ? (
        <MaterialIcons name='create' size={20}/>
      ) : props.routeName === "Settings" ? (
        <MaterialIcons name='security' size={20}/>
      ) : props.routeName === "Messages" ? (
        <MaterialIcons name='comment' size={20}/>
      ) : null}
    </View>
  );
};
const tabbarVisible = ({ navigation, route }) => {
  // console.log({ state: navigation.state, index: navigation.state.index })
  //const showTabbar = navigation.state.index == 0;

  return true; //showTabbar;
};
export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => (
      tabbarVisible({ navigation, route }),
      
      {
        tabBarIcon: ({ focused, color }) => {
          // console.log('focused==', { color, focused, route });
          return (
            <View style={[styles.barContainer]}>
              {/* console.log('route===', route) */}
              {focused && <View style={styles.topBarView} />}
              <NavigationIcons
                routeName={route.name}
                tintColor={color}
                focused={focused}
              />
            </View>
          );
        },
      }
    )}
    keyboardHidesNavigationBar={true}
    barStyle={{
      borderTopWidth: Platform.OS == "ios" ? 0 : 0,
      backgroundColor: "#fff",
      shadowColor:  "#000",
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 35,
      paddingBottom: Platform.OS == "ios" ? 0 : 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderColor: "transparent",
      justifyContent: "center",
      // position: 'absolute',
      overflow: Platform.OS == "ios" ? "visible" : "hidden",
    }}>
      <Tab.Screen name="Jobs" component={JobStack} />
      <Tab.Screen name="Resume" component={ResumeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Messages" component={MessageStack} />
  <Tab.Screen name="Settings" component={SettingsStack} /> 
   
    </Tab.Navigator>
  );
}
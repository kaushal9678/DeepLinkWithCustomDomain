import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
 import Animated from 'react-native-reanimated';
import { enableScreens } from 'react-native-screens';
import JobDetail from '../pages/jobs/JobDetail';
import Jobs from '../pages/jobs/Jobs';
import Message from '../pages/message/Message';
import MessageDetail from '../pages/message/MessageDetail';
import Profile from '../pages/profile/Profile';
import Resume from '../pages/resume';
import Settings from '../pages/settings/Settings';

enableScreens();

const StackJob = createStackNavigator();
const StackResume = createStackNavigator();
const StackProfile = createStackNavigator();
const StackMessage = createStackNavigator();
const StackSettings = createStackNavigator();

function JobStack() {
  return (
   
      <StackJob.Navigator>
        <StackJob.Screen name="Jobs" component={Jobs} />
        <StackJob.Screen name="JobDetail" component={JobDetail} />
      </StackJob.Navigator>
   
  );
}
function ResumeStack() {
    return (
     
        <StackResume.Navigator>
          <StackResume.Screen name="Resume" component={Resume} />
        
        </StackResume.Navigator>
     
    );
  }
  function ProfileStack() {
    return (
     
        <StackProfile.Navigator>
          <StackProfile.Screen name="Profile" component={Profile} />
        
        </StackProfile.Navigator>
     
    );
  }
  function MessageStack() {
    return (
     
        <StackMessage.Navigator>
          <StackMessage.Screen name="Message" component={Message} />
          <StackMessage.Screen name="Message Detail" component={MessageDetail} />
        </StackMessage.Navigator>
     
    );
  }
  function SettingsStack() {
    return (
     
        <StackSettings.Navigator>
          <StackSettings.Screen name="Settings" component={Settings} />
         
        </StackSettings.Navigator>
     
    );
  }

  export {JobStack, MessageStack, SettingsStack, ProfileStack, ResumeStack}
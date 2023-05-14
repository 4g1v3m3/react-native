import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native';

import HomeScreen from './src/screen/HomeScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import ProfileSreen from './src/screen/ProfileScreen';
import LoginScreen from './src/screen/LoginScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  return (
    <NavigationContainer>
      <StatusBar />
      {loggedIn ?
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#000000"
          inactiveColor='#666666'
          barStyle={{ backgroundColor: '#0aaaaaaa' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="settings" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileSreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
        :
        <LoginScreen onLogin={() => setLoggedIn(true)} />
      }
    </NavigationContainer>
  );
}

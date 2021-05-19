import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../Screens/HomeScreen";
import NotificationScreen from "./NotificationScreen";
import Matches from "./matches";
import ChatScreen from "./ChatScreen";




// enables routing to other screens from home and candidate

const HomeStack = createStackNavigator();
const CandidateStack = createStackNavigator();

// initialization of bottom tabs and configuration

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (

  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: 'People',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen  name="Notifications"  component={ChatScreen}  options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size}) => (
          <Icon name="users" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen  name="Profile" component={Matches} options={{
        tabBarLabel: 'Matches',
        tabBarIcon: ({ color, size }) => (
          <Icon name="plus" color={color} size={19} />
        ),
      }}
    />
    <Tab.Screen  name="Newscreen"  component={NotificationScreen}  options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => (
          <Icon name="info-circle" color={color} size={22} />
        ),
      }}
    />
  </Tab.Navigator>

);
export default MainTabScreen;


// creates links with drawer,
// 

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      }
    }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options
        ={{
         title:'Chatme',
          headerLeft: () => (
            <Icon.Button name='bars' size={22} backgroundColor='#fff' color='red' onPress={() => navigation.openDrawer() }></Icon.Button>
            
            ), 
           
            
        }}
      />

    </HomeStack.Navigator>
  )
};


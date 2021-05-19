
import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppLoading } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from "./mainTabScreens"
import DrawerItems from "./DrawerItems"
const Drawer = createDrawerNavigator();




// entry point to app routing,

//All screens are wrapped with naviagtion container

//
const Navigator = () => {
  

  return (

    <NavigationContainer>

      <Drawer.Navigator drawerContent ={props => <DrawerItems {...props}/>}>

        <Drawer.Screen name="Home" component={MainTabScreen} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}
export default Navigator;


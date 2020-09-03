import React, { Component,useState,useEffect,useContext } from 'react';
import { View,Button, Text, Image, TouchableOpacity,Dimensions,useWindowDimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AsyncStorage} from "react-native"
import SplashScreen from "../screens/SplashScreen"
import Dashboard from "../screens/drawerTab1/Dashboard"
import SelectItems from "../screens/drawerTab1/SelectItems"
import ItemsTally from "../screens/drawerTab1/ItemsTally"

import Profile from "../screens/drawerTab1/Profile"
import BillDetails from "../screens/drawerTab1/BillDetails"

import MyTabBar from './customBottomTab';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function dashboardFlow() {
  return (
      <Stack.Navigator
      >
        <Stack.Screen name="Dashboard" component={Dashboard}
         options={{
          headerTransparent: true,
          title:""
        }}
        />
        <Stack.Screen name="SelectItems" component={SelectItems} 
        options={{
          headerTransparent: true,
          title:"Add Items"
        }}/>
        <Stack.Screen name="ItemsTally" component={ItemsTally} headerMode="none"
         options={{
          headerTransparent: true,
          title:""
        }}/>
      </Stack.Navigator>
   );
}

function DrawerNavigator() {
  const dimensions = useWindowDimensions();

  return (
      <Drawer.Navigator 
   //   drawerContent={props=><CustomSidebarMenu {...props} />}
   //   initialRouteName="Dashboard"
     // options={{ headerTitle: props => <NavigationDrawerStructure {...props} /> }}
     drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
     >
        <Drawer.Screen
         name="DrawerTab" 
         component={DrawerTab1}
      />
      </Drawer.Navigator>
  );
}

function DrawerTab1() {
  return (
    <Tab.Navigator 
    tabBar={props => <MyTabBar {...props} />}
    
    >
      <Tab.Screen name="Dashboard" component={dashboardFlow} />
      <Tab.Screen name="Bill Details" component={BillDetails} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const[flow,setFlow]=useState(0)

  useEffect(()=>{
    AsyncStorage.getItem("token")
    .then(req => req)
    .then(json => {
        setTimeout(() => {
                json=="signedin"? setFlow(1):setFlow(1)
          }, 3000);
       })
    .catch(error => console.log(error));
  
},[])

  return (
      <Stack.Navigator
    //  initialRouteName="SplashScreen"
      headerMode="none">
       {flow==0?
       <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          :null}
        {flow==1?<>
          <Stack.Screen name="DrawerTab1" component={DrawerTab1}/>
        </>:null}
        
       
        </Stack.Navigator>
   );
}


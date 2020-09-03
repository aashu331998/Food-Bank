import React, { useState,useEffect,useContext } from "react"; 
import { View,Button, Text, Image, TouchableOpacity,Dimensions} from 'react-native';

  export default function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            console.log("hhhhh")
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <View style={{flex:1,justifyContent:"center",
            alignItems:"center",height:50}}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{justifyContent:"center",flex:1,
              alignItems:"center"}}
            >
              <View 
              //style={isFocused?{elevation:0.2,backgroundColor:'rgba(255,255,255, 0.1)'}:null}
              >
              <Image
                source={
                  label=="Dashboard"?  require('../icons/home.png'):null||
                  label=="Bill Details"?  require('../icons/bill.png'):null||
                  label=="Profile"?  require('../icons/customer.png'):null
                }
                style={{width:100,height:30,resizeMode:"contain"}}
              />
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text> */}
              </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
  
  
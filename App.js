import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import App from "./src/navigation/navigatorRouter"




export default ()=>{
    return <NavigationContainer >
    
      <App/>
       
      </NavigationContainer>
    };
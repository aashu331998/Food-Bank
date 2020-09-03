import React, { useState,useEffect,useContext } from "react"; 
//import Video from 'react-native-video'; 
import { View,Text,Image } from "react-native";

 const SplashScreen=(props) =>{
      return (<View style={{flex:1,
      justifyContent:"center",alignItems:"center"}}>
      <Text>SplashScreen</Text>
      {/* <Image
       // source={require('../../videos/splash.mp4')}
        source={require('../images/splash.jpg')}
        style={{width:100+"%",height:100+"%"}}
        resizeMode={"center"}
        /> */}

</View>
    );}

  export default SplashScreen ; 

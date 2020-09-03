import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,TouchableOpacity } from "react-native";

 const Dashboard=(props) =>{
      return (<View style={{flex:1,
      justifyContent:"flex-end",alignItems:"flex-end"}}>
      <Text 
      style={{alignSelf:"center",flex:1,top:45+"%",fontWeight:"bold",fontSize:30,color:"rgba(58, 83, 155, 1)"}}
       >Food Bank</Text>
      <TouchableOpacity
      style={{}}
      onPress={()=>{props.navigation.navigate("SelectItems")}}
      >
        <View style={{width:90,height:50,alignItems:"center",margin:20,elevation:4,borderRadius:5,
        justifyContent:"center", backgroundColor:"rgba(58, 83, 155, 1)"}}>
        <Text style={{color:"#FFFFFF",fontSize:15,fontWeight:"bold"}} >Add Items</Text>
        </View>
      </TouchableOpacity>
     
      
      
</View>
    );}

  export default Dashboard ; 

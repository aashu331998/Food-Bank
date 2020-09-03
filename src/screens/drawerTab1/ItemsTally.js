import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,Image,FlatList,TouchableOpacity } from "react-native";

 const ItemsTally=(props) =>{
   {console.log(props.route.params.data)}
      return (<View style={{flex:1,paddingTop:50,
      justifyContent:"center",alignItems:"center"}}>
        
        <Text 
        style={{alignSelf:"flex-start",marginLeft:20,fontWeight:"bold",fontSize:30,color:"rgba(58, 83, 155, 1)"}}
        >Final List</Text>
 
        <View style={{width:100+"%",flexDirection:"row",marginTop:10}}>
                <View style={{width:12+"%",paddingLeft:5,alignItems:"center",
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Num</Text>
                </View>
                <View style={{width:25+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Product</Text>
                </View>
                <View style={{width:25+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Type</Text>
                </View>
                <View style={{width:40+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Description</Text>
                </View>
              </View>
 
        <FlatList
            data={props.route.params.data}
          //  keyExtractor={ (item, index) => }
            style={{alignContent:"center",flex:1}}
            //numColumns={2}
            renderItem={
                ({item}) => (
                  
             <View style={props.route.params.data.indexOf(item)%2?
              {width:100+"%",flexDirection:"row",
               backgroundColor:"white"}
               :{width:100+"%",flexDirection:"row",
               backgroundColor:"rgba(68, 108, 179, 0.3)"}
                }>
                
                <View style={{width:12+"%",paddingLeft:5,alignItems:"center",
                height:35,justifyContent:"center",
                borderColor:"#FFD1C2"
                }}>
            <Text style={{fontSize:14}}>{props.route.params.data.indexOf(item)+1}</Text>
                </View>
                <View style={{width:25+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
            <Text style={{fontSize:14}}>{item.title}</Text>
                </View>
                <View style={{width:25+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
            <Text style={{fontSize:14}}>{item.itemType}</Text>
                </View>
                <View style={{width:40+"%",paddingLeft:5,
                height:35,justifyContent:"center",borderColor:"#FFD1C2"}}>
                    <Text style={{fontSize:14}}>{item.info}</Text>
                </View>
               
             </View>
                      )
                    }
                />
 <View style={{flex:1,alignSelf:"flex-end",justifyContent:"flex-end",position:"absolute",top:100+"%"}}>
        <TouchableOpacity 
        style={{width:118, height:42,marginRight:20}}
        onPress={()=>{props.navigation.navigate("Dashboard")}}>
        <View style={{width:118, height:42,borderRadius:5,
          alignItems:"center",justifyContent:"center",backgroundColor:"rgba(58, 83, 155, 0.9)"}}>
        <Text style={{fontSize:18,color:"#FFFFFF",fontWeight:"600"}}>Submit</Text>
        </View>
        </TouchableOpacity>
        </View>
        
</View>
    );}

  export default ItemsTally ; 

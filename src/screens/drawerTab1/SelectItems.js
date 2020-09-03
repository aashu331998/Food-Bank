import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,Image,TouchableOpacity,ScrollView,FlatList,Dimensions } from "react-native";
//import data from "../../components/data.json"


const SelectItems=(props) =>{
  let data=[
    {"id": 1,
    "title": "Rice",
    "itemType":"Standard Items",
    "info":"info of prduct",
    "image":require(`../../images/rice.jpg`)
    },
    {"id": 2,
    "title": "Pasta",
    "itemType":"Standard Items",
    "info":"info of prduct",
    "image":require(`../../images/pasta.jpg`)
    },
    {"id": 3,
    "title": "Sugar",
    "itemType":"Standard Items",
    "info":"info of prduct",
    "image":require(`../../images/shugar.jpg`)
    },
    {"id": 4,
    "title": "Coffee",
    "itemType":"Standard Items",
    "info":"info of prduct",
    "image":require(`../../images/coffee.jpg`)
    },
    {"id": 5,
    "title": "UHT Milk",
    "itemType":"Standard Items",
    "info":"info of prduct",
    "image":require(`../../images/uthmilk.png`)
    },
    {"id": 6,
    "title": "Diaper",
    "itemType":"Emergency Items",
    "info":"info of prduct",
    "image":require(`../../images/diaper.png`)
    },
    {"id": 7,
    "title": "Hygiene",
    "itemType":"Emergency Items",
    "info":"info of prduct",
    "image":require(`../../images/hygiene.jpg`)
    },
    {"id": 8,
    "title": "Toilet Rolls",
    "itemType":"Emergency Items",
    "info":"info of prduct",
    "image":require(`../../images/toiletroll.png`)
    }
    ];
  const [butt,setButt]= useState(0);
  const [allData,setAllData]= useState(data);
  const [standardData,setStandardData]= useState(data.filter((temp)=>temp.itemType== "Standard Items"));
  const [emergencyData,setEmergencyData]= useState(data.filter((temp)=>temp.itemType== "Emergency Items"));
  const [selectedAll,setSelectedAll]= useState([]);
  const [w1,getW1]= useState(Dimensions.get("screen").width);
  const [h1,getH1]= useState(Dimensions.get("screen").height);
  const [countStandardData,setCountStandardData]= useState(selectedAll.filter((temp)=>temp.itemType== "Standard Items"));
  const [countemergencyData,setCountEmergencyData]= useState(selectedAll.filter((temp)=>temp.itemType== "Emergency Items"));
   
console.log(allData[0].image[0]+"aa")
  useEffect(()=>{
   setCountStandardData(selectedAll.filter((temp)=>temp.itemType== "Standard Items"));
   setCountEmergencyData(selectedAll.filter((temp)=>temp.itemType== "Emergency Items"));
    },[selectedAll])

      return (<View style={{flex:1,width:100+"%",paddingTop:50}}>
              <ScrollView style={{ flex:1,width:100+"%"}}>
      
        

    <View style={{width:100+"%",height:60,justifyContent:"center",alignItems:"center"}}>
             <View style={{borderWidth:1,borderColor:"rgba(58, 83, 155, 1)",width:95+"%",height:55+"%",
                     borderRadius:20,flexDirection:"row"}}>
                 <TouchableOpacity
                  onPress={()=>{{setButt(0);
                  setAllData(data)}}}  
                  style={{flex:1}}>
                 <View style={butt==0?{borderRightWidth:1,borderColor:"rgba(58, 83, 155, 1)",backgroundColor:"rgba(58, 83, 155, 1)"
                      ,flex:1,alignItems:"center",justifyContent:"center",borderTopLeftRadius:20,borderBottomLeftRadius:20}:
                      {borderRightWidth:1,borderColor:"rgba(58, 83, 155, 1)"
                      ,flex:1,alignItems:"center",justifyContent:"center"}
                      }>
                    <Text style={butt==0?{fontSize:13,color:"#ffffff",fontWeight:"bold"}:{fontSize:13,color:"rgba(58, 83, 155, 1)",fontWeight:"bold"}}>All</Text>
                </View>
                </TouchableOpacity>
                 <TouchableOpacity
                onPress={()=>{{setButt(1);
                  setAllData(standardData);}}}
                style={{flex:1}}>
                <View style={butt==1?{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(58, 83, 155, 1)"}:{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text style={butt==1?{fontSize:13,color:"#ffffff",fontWeight:"bold"}:{fontSize:13,color:"rgba(58, 83, 155, 1)",fontWeight:"bold"}}>Standard Items</Text>
                </View>
                </TouchableOpacity>
                 <TouchableOpacity
               onPress={()=>{{setButt(2);
                setAllData(emergencyData);
               }}}
               style={{flex:1}}>
                <View style={butt==2?
                    {borderLeftWidth:1,borderColor:"rgba(58, 83, 155, 1)",borderTopRightRadius:20,borderBottomRightRadius:20,
                    backgroundColor:"rgba(58, 83, 155, 1)",flex:1,alignItems:"center",justifyContent:"center"}
                    :{borderLeftWidth:1,borderColor:"rgba(58, 83, 155, 1)"
                    ,flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text style={butt==2?{fontSize:13,color:"#ffffff",fontWeight:"bold"}:{fontSize:13,color:"rgba(58, 83, 155, 1)",fontWeight:"bold"}}>Emergency Items</Text>
               </View>
                </TouchableOpacity>
             </View>
            </View>

    <View style={{flexDirection:"row",marginVertical:8}}>
        <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity
            onPress={()=>{setSelectedAll([])}}
            style={{marginLeft:10,width:30,alignItems:"center"}}>
            <Text
            style={{fontSize:20,fontWeight:"bold",color:"rgba(58, 83, 155, 1)"}}
            >X</Text>
            </TouchableOpacity>      
            <Text style={{fontSize:18,marginLeft:10}}>
              {selectedAll.length}</Text>      
        </View>
        <View style={{width:20+"%",height:32,backgroundColor:"#FFFFFF",
                      elevation:4,alignItems:"center",justifyContent:"center",marginRight:10}}>
            <Text style={{fontSize:9}}>All : {selectedAll.length}</Text>
        </View>
        <View style={{width:20+"%",height:32,backgroundColor:"#FFFFFF",
                      elevation:4,alignItems:"center",justifyContent:"center",marginRight:10}}>
            <Text style={{fontSize:9}}>StdItems : {countStandardData.length}</Text>
        </View>
        <View style={{width:20+"%",height:32,backgroundColor:"#FFFFFF",
                      elevation:4,alignItems:"center",justifyContent:"center",marginRight:10}}>
            <Text style={{fontSize:9}}>EmgItems : {countemergencyData.length}</Text>
        </View>
    </View>



    <FlatList
            data={allData}
            //keyExtractor={ (item, index) => item.id }
            style={{alignContent:"center",flex:1,marginBottom:90}}
            numColumns={2}
            renderItem={
                ({item}) => (<View style={data.indexOf(item)%2?{flex:0.5,alignItems:"flex-start",marginLeft:2}:{flex:0.5,alignItems:"flex-end",marginRight:2}}>
               
             {/* <View style={{flex:0.5,alignItems:"center",justifyContent:"center",marginTop:5}}> */}
                    {/* <TouchableOpacity  onPress ={() =>{tick==0? setTick(1):setTick(0)}}> */}
                   {/* <>
                {butt==0||
                (butt==1&&item.itemType=="Standard Items")||
                (butt==2&&item.itemType=="Emergency Items")? */}
                    
                    <TouchableOpacity  onPress ={() =>{{
                        selectedAll.includes(item)?setSelectedAll(selectedAll.filter((blogPost)=>blogPost!== item)):setSelectedAll([...selectedAll, item])
                        }}}>   
                        {/* {console.log(selected)}   */}
                    
                        <View style={{alignItems:"center",margin:5,width:w1*0.5-20,height:w1*0.53,flexDirection:"row",
                        backgroundColor:"#FFFFFF",elevation:3,borderRadius:8}}>
                            
                        <Image
                     //  {item.nick_local_name=="Leopard"?console.log(item.animal_img[0]):null}
                       //source={item.animal_img!=""?{uri: `http://3.6.133.72:3000${item.animal_img[0]}`}:require('../../image/img1.png')}
                        source={item.image}
                        style={{width:w1*0.5-20,height:w1*0.5-20,resizeMode:"cover",alignSelf:"flex-start",position:"absolute",borderRadius:8,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                        />
                        {selectedAll.includes(item)? <Image
                        source={require('../../icons/check.png')}
                        style={{width:28,height:28,resizeMode:"center",alignSelf:"flex-start",position:"absolute",top:-6,left:-6}}
                        />:null}
                        
                        <View style={{alignSelf:"flex-end",flex:1}}>

                        <View style={{marginBottom:10,backgroundColor:"rgba(46, 49, 49, 0.4)",paddingHorizontal:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                                <Text style={{color:"#FFFFFF",fontSize:10.57}}>Type</Text>
                        <Text style={{color:"#FFFFFF",fontSize:10.57}}>{item.itemType}</Text>
                            </View>
                            {/* <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{color:"#FFFFFF",fontSize:10.57}}>Description</Text>
                        <Text style={{color:"#FFFFFF",fontSize:10.57}}>{item.info}</Text>
                            </View> */}
                          
                        </View>

                        <View style={{alignItems:"center",justifyContent:"center",height:32}}>
                        <Text style={{fontSize:14,fontWeight:"bold"}}>{item.title}</Text>
                        </View>
                        </View>
                           </View>
                    </TouchableOpacity>
                   </View>
                )
            }
        />
      

</ScrollView>
<View style={{flex:1,alignSelf:"flex-end",justifyContent:"flex-end",position:"absolute",top:100+"%"}}>
        <TouchableOpacity 
        style={{width:118, height:42,marginRight:20}}
        onPress={()=>{props.navigation.navigate("ItemsTally",{data:selectedAll})}}>
        <View style={{width:118, height:42,borderRadius:5,
          alignItems:"center",justifyContent:"center",backgroundColor:"rgba(58, 83, 155, 0.9)"}}>
        <Text style={{fontSize:18,color:"#FFFFFF",fontWeight:"600"}}>Done</Text>
        </View>
        </TouchableOpacity>
        </View>

</View>
    );}

  export default SelectItems ; 

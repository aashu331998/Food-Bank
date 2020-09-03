import {AsyncStorage} from "react-native"
import createDataContext from "./createDataContext"
import jasonServer from "../api/jasonServer";
import{navigate} from "../navigationRef"

const ProfileContext=(state, action)=>{
  switch(action.type) {

    case "get_profile":
    return action.payload

    // case "logedin":
    // return{...state, token:action.payload }; 

    default:
    return state
};}

     
const getProfileById= dispatch=>{
        return async (id)=>{
            const response=  await jasonServer.get(`/getProfileById/?accountId=${await AsyncStorage.getItem("accountId")}`,
          {
            headers: {
                Authorization: "Bearer "+await AsyncStorage.getItem("token")
            }
          })
          //console.log(response.data);
          dispatch({type:"get_profile", payload: response.data});
        };
        };
          
        const emptyState= dispatch=>{
          return async ()=>{
              const response=  []
            //console.log(response.data);
            dispatch({type:"get_profile", payload: response.data});
          };
          };
            
      
  
 export const{Provider,Context}=createDataContext(
    ProfileContext,
    {getProfileById,
      emptyState
    // mobileVerification,
    // localSignin,
    // signup
    },
    []
    // {token:null}
    );
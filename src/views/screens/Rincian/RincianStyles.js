import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const RincianStyles = StyleSheet.create({
    frame: {
        backgroundColor:"white", 
        padding:10, 
        marginVertical:20,
        marginHorizontal:15, 
        borderRadius:5, 
        borderColor:colors.lightgrey, 
        borderWidth:1,
        width:320
    },
    
    menu: {
        marginTop:10,
        fontWeight:'bold', 
        fontSize:18
    },
    btntesti: {
        width: 120,
        height: 20,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        borderRadius:10,
        marginTop:5,
        paddingVertical:2
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
      },
    btnprimary: {
        borderRadius:30, 
        backgroundColor:colors.blue,
        alignItems:'center', 
        padding:15, 
        marginTop:10},
    col: { 
        paddingRight:75, 
        paddingVertical:5, 
        borderBottomColor:"light"
    }

  });
  
  export default RincianStyles;
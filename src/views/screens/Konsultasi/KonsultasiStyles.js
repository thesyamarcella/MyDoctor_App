import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const Konsultasistyles = StyleSheet.create({
    boxcard: {
      width: 330,
      height: 140,
      borderRadius: 15,
      paddingVertical:10,
      backgroundColor: colors.white,
      marginVertical: 10,
      flexDirection: "column",
      shadowColor: colors.lightblue,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.80,
        shadowRadius: 4.65,

        elevation: 7,
    },
    containerText: {
      marginLeft: 10,
      marginTop:5,
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
    btnprimary: {
        backgroundColor:colors.blue, 
        height:22, 
        width:90, 
        alignItems:"center",
        paddingVertical:5, 
        borderRadius:10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
  
  export default Konsultasistyles;
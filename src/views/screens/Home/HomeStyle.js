import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lightblue,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.purple,
    },
    header: {
      flex:1,
      marginTop:10,
    },

    cardTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    },
    
});

  export default HomeStyle;
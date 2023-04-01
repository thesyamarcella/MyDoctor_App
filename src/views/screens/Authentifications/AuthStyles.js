import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const AuthStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:colors.lightblue
  },
  regform:{
    marginTop:120,
    alignSelf:"stretch",
    borderTopStartRadius:48,
    borderTopEndRadius:48,
    paddingHorizontal:30,
    backgroundColor:colors.white,
    height:525,
  
  },
  header:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    width:300,
    height:55,
    paddingVertical:40,
    marginBottom:10
      },
  textinput:{
    color:colors.dark,
    alignSelf:"stretch",
    height:40,
    marginBottom:13,
    width:320,
    height:55,
      paddingVertical:10,
      paddingHorizontal:10,
    backgroundColor: colors.white,
    borderRadius:15,
    shadowColor: colors.lightblue,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.80,
        shadowRadius: 4.65,

        elevation: 7,
  },
  button: {
    alignSelf:"stretch",
    alignItems:"center",
    padding:20,
    backgroundColor:colors.blue,
    borderRadius:27,
    marginTop:13,
  },
  buttonacc: {
    alignSelf:"stretch",
    backgroundColor:colors.lightblue,
    borderRadius:20,
    padding:20,
    marginBottom:13
  },
  btntext: {
    color:"white",
    fontWeight:"bold",
    fontSize:16
  },
  containerLine: {
    width: "auto",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: 'center'
},
line: {
    width: 120,
    height: 2,
    backgroundColor: colors.darkblue
    
},
    textError: {
    color: colors.darkblue,
    marginVertical: -10,
    fontStyle: "italic",
    },
 btn:{
      backgroundColor:colors.darkblue,
      height:50,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row'
  },
  });
  
  export default AuthStyles;
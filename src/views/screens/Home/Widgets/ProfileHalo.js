import { Image, Text, View, StyleSheet } from 'react-native'
import Avatar from '../../../../assets/ava-thesya.png'
import account from '../../../../consts/account';
import colors from '../../../../consts/colors'
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileHalo = () =>{
    let usernameArr = account.fullname.split(' ');
    let username = usernameArr[0];
    return (
      <View>
        <View style={styles.profile}>
        {/* <ImageBackground source={"../../../../assets/headerbg.jpeg"} resizeMode="cover" style={{flex: 1, justifyContent:"center", width:360, height:100}}> */}
          <View style={{ flexDirection: 'column',flex:3 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, fontWeight:'bold' }} >Hi,</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5 }} >Selamat Datang</Text>
              <Text style={{ fontSize: 16, fontWeight:'bold' }} >!</Text>
            </View>
            <Text style={{ fontSize: 16, marginTop:  2}} >{account.place}</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Ionicons name='person-circle-outline' size={40} color="black"/>
          </View>
          </View>
        </View>
        
    )
}

export default ProfileHalo;

const styles = StyleSheet.create({
  profile: {
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:-20,
    paddingHorizontal:20, 
    paddingVertical:20, 
    backgroundColor:colors.lightblue}
});
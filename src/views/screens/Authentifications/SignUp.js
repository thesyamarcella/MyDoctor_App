import { SafeAreaView ,StyleSheet, Text, View, TextInput,TouchableOpacity, Image,ImageBackground } from 'react-native'
import React from 'react';
import colors from '../../../consts/colors';
import { useNavigation } from '@react-navigation/native';
import AuthStyles from './AuthStyles';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={AuthStyles.container}>
      
      <ImageBackground source={require("../../../../assets/Splash.png")} resizeMode="cover" style={AuthStyles.image}>
      <View style={AuthStyles.regform}>
        <Text style={AuthStyles.header}>Daftar dan Bergabung dengan MyDoctor!</Text>

        <TextInput style={AuthStyles.textinput} placeholder="Nama Pengguna"
        underlineColorAndroid={'transparent'} />

        <TextInput style={AuthStyles.textinput} placeholder="No.HP"
        underlineColorAndroid={'transparent'} />

        <TextInput style={AuthStyles.textinput} placeholder="Kata Sandi"
        underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={AuthStyles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={AuthStyles.btntext}>Bergabung Sekarang</Text>
        </TouchableOpacity>

        <Text style={{textAlign:"center",fontWeight:'bold',paddingVertical:15,marginTop:15}}>
          atau mendaftar dengan
        </Text>

        <TouchableOpacity style={AuthStyles.buttonacc} onPress={() => navigation.navigate('')}>
            <Text style={{fontWeight:"bold", color:colors.darkgrey, textAlign:'center'}}>mendaftar dengan Google</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


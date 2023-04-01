import React, { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image, Alert, ImageBackground, mo} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import account from "../../../consts/account"
import colors from "../../../consts/colors"
import AuthStyles from './AuthStyles';

export default function Login (props) {
  const [msgError, setMsgError] = useState("");
  const [errorMsg, setErrorMsg] = useState({email:"",password:""});
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handlerIconPassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handlerPostSignIn = () =>{
    //validation
    if(!data.email){
        setErrorMsg({...errorMsg, email:"Required field"})
    }else if(!data.password){
        setErrorMsg({...errorMsg, password:"Required field"})
    }else if(!data.email && !data.password){
        setErrorMsg({email:"Required field", password:"Required field"})
    }else{
        setErrorMsg({email:"", password:""})
        if((data.email === account.email) && (data.password === account.password) ){
            props.navigation.navigate('Main');
        }else{
            Alert.alert(
                "Invalid Grant",
                "Username or password doesn't match on system.",
                [
                  { text: "Close", onPress: () => setData({email:"",password:""}) }
                ]
            );
        }
    }
  }

    return (
        <SafeAreaView style={AuthStyles.container}>
            <ImageBackground source={require("../../../../assets/Splash.png")} resizeMode="cover" style={AuthStyles.image}>
            <View style={AuthStyles.regform}>
                <Text style={AuthStyles.header}>Masuk dan Kembali Bergabung di MyDoctor!</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{padding: 5, margin: 5, marginRight: -45, borderRadius: 10}} />
                <TextInput style={AuthStyles.textinput} 
                placeholder={"Masukkan Nama Pengguna / No.HP"}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={text => setData({ ...data, email: text })}
                defaultValue={data.email} />
                </View>
                <Text style={AuthStyles.textError}>{errorMsg.email}</Text>
                <View style={{flexDirection: "row"}}>
                <TextInput 
                style={AuthStyles.textinput} 
                secureTextEntry={data.secureTextEntry}
                placeholder={"Masukkan Kata Sandi"}
                autoCorrect={false}
                onChangeText={text => setData({ ...data, password: text })}
                defaultValue={data.password} />
                <TouchableOpacity
                style={{ justifyContent: 'center', marginLeft: -40, paddingRight: 20}}
                onPress={() => handlerIconPassword()}
            >
                <Ionicons
                name={data.secureTextEntry ? "eye" : "eye-off"}
                style={{fontSize:20, color: "#cdcdcd", justifyContent:'center', marginBottom:10}}
              />
            </TouchableOpacity>
                </View>
                <Text style={AuthStyles.textError}>{errorMsg.password}</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Konfirmasi')} >
                <View style={AuthStyles.button} >
                    <Text style={AuthStyles.btntext}>Masuk</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("SignUp")} >
                <View style={AuthStyles.btn} >
                    <Text>Belum punya akun?</Text>
                    <Text style={{fontWeight:'bold',color:colors.orange}}> Daftar Sekarang</Text>
                </View>
            </TouchableOpacity>

            </View>
            </ImageBackground>   
        </SafeAreaView>
    );
  }


import { StyleSheet, Text, View,SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import { SearchBar } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList} from 'react-native-web';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AirbnbRating } from 'react-native-ratings';
 
export default function Feedback ({navigation}) {
    return (
        <SafeAreaView style={{paddingTop:20, backgroundColor:'#fff'}}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <View style ={{marginVertical:10, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>Sesi kamu telah berakhir,</Text>
                    <Text style={{fontWeight:"bold"}}>Bagaimana Sesi kamu hari ini?</Text>
                </View>
                <AirbnbRating
                count={5}
                reviews={['Very Bad', 'Bad', 'Good', 'Great', 'Exelent']}
                defaultRating={0}
                size={20}
                showRating={false}
                />
            </View>
            <View style={{backgroundColor:"#edf3ff",marginVertical:20, borderRadius:15,paddingVertical:40, justifyContent:"center",marginLeft:40,marginRight:40}}>
                <TextInput   
                />
            </View>

            <View style={{justifyContent:"flex-end",alignItems:"center", paddingTop:10}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={{backgroundColor:"dodgerblue", height:35, borderRadius:15, width:100}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:15, textAlign:"center", paddingTop:5}}>Kirim</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
};

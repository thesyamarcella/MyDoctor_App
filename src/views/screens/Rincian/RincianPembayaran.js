import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {SafeAreaView,Text,View,ScrollView, Image, TouchableOpacity, TextInput, Animated, Modal} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";
import AuthStyles from "../Authentifications/AuthStyles";
import { useNavigation } from '@react-navigation/native';
import colors from "../../../consts/colors";

export default function RincianPembayaran(){

    const ModalPoup = ({visible, children}) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
          toggleModal();
        }, [visible]);
        const toggleModal = () => {
          if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start();
          } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }
        };
        return (
          <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
              <Animated.View
                style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
                {children}
              </Animated.View>
            </View>
          </Modal>
        );
      };

      

    const navigation = useNavigation();
    const [diriSendiri, setDiriSendiri] = useState(false);
    const [orangLain, setOrangLain] = useState(false);

    const DiriSendiri = () => {
        setDiriSendiri(true);
        setOrangLain(false);
    }

    const OrangLain = () => {
        setDiriSendiri(false);
        setOrangLain(true);
    }

    return (
        <SafeAreaView style={{paddingTop:20}}>

        <View style={{flexDirection:"row", marginTop:20}}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons name='chevron-back' size={20} color="black"/>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems:"center", paddingLeft:100}}>
                  <Text style={{textAlign:"center", fontWeight:"bold"}}>3/4: Pembayaran</Text>
                </View>
        </View>

                <View style={{flexDirection:"row", padding:20,backgroundColor:'#fff'}}>
                    <View>
                        <Image
                            style={{width:50, height:50, borderRadius:20}}
                            source={require("../../../assets/Ava-Dokter-W.jpeg")}
                        />
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold"}}>Dr. Thesya Marcella</Text>
                        <Text>Dokter Kesehatan Jiwa</Text>
                        <Text style={{color:"red"}}>Rp. 10.000</Text>
                    </View>
                </View>

                <ScrollView style={{ paddingHorizontal: 20, paddingBottom: 20, backgroundColor:'#edf3ff'}}>
                <View style={{flexDirection:"column",justifyContent:'space-between',backgroundColor:"#fff",marginVertical:20, borderRadius:15,paddingVertical:10, borderRadius:10, padding:10}}>
                    <View style={{marginBottom:3}}>
                        <Text style={{fontSize:11}}>Jenis Pelayanan</Text>
                        <Text style={{fontWeight:"bold"}}>Konsultasi</Text>
                    </View>
                    <View style={{backgroundColor:"gold", width:"100%", height:2}}></View>
                    <View style={{marginTop:10, marginVertical:15}}>
                        <Text >Konsultasi Untuk :</Text>
                            <TextInput style={{marginHorizontal:10,paddingVertical:10, marginTop:5,borderWidth:1,borderRadius:15, borderColor:colors.lightgrey, paddingHorizontal:12}} placeholder="masukkan nama panggilan"
        underlineColorAndroid={'transparent'} />
                    </View>

                    <View style={{paddingVertical:10}}>
                    <View style={{backgroundColor:"gold", width:"100%", height:2}}></View>
                    </View>

                    <View>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <Text>
                            Metode Pembayaran
                        </Text>
                        <View>
                        <Text style={{color:colors.orange, fontWeight:'700', fontSize:11}}>Lihat Semua</Text>
                        </View>
                        </View>
                        <CheckBox
                            title=" OVO (62******94) 
                            saldo: Rp 20.000"
                            left
                            checked={diriSendiri}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            onPress={DiriSendiri}
                            />
                        
                        <CheckBox
                            title=" DANA (62******94)
                            saldo: Rp 15.000"
                            left
                            checked={orangLain}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            onPress={OrangLain}
                            />
                    </View>

                    <View style={{flexDirection:"column", backgroundColor:"white",borderRadius:10, paddingVertical:5,padding:10, flex:3, marginVertical:10}}>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <Text>Biaya Sesi</Text>
                    <Text>Rp. 10.000</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <Text>Biaya penanganan</Text>
                    <Text>Rp.      500</Text>
                    </View>

                    <View style={{backgroundColor:"gold", width:"100%", height:2, marginVertical:5}}></View>
                    

                    <View style={{marginTop:5}}>
                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <Text style={{fontWeight:"bold"}}>
                            Total Pembayaran
                        </Text>
                        <View>
                        <Ionicons name='ellipsis-horizontal' size={20} color="gold" width={20} height={20} />
                        </View>
                        </View>
                        <Text style={{color:"red", marginTop:-5}}>Rp. 10.500</Text> 
                    </View>    
                    </View>
                </View>
            </ScrollView>
            <View style={{justifyContent:"flex-end",alignItems:"center", marginTop:-30, marginBottom:5, backgroundColor:colors.white, paddingVertical:10}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Konfirmasi')}>
                            <View style={{borderRadius:15, width:330, height:20, marginBottom:20, backgroundColor:colors.blue, height:40, justifyContent:'center', width:300}}>
                                <Text style={{color:colors.white, fontWeight:'900', textAlign:"center"}}>Bayar dan Konfirmasi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            
        </SafeAreaView>
    );
}
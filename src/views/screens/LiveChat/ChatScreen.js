import { Text, View,SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen () {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{paddingTop:20, backgroundColor:'#fff'}}>

        <View style={{flexDirection:"row", marginTop:20, paddingBottom: 20}}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('RincianPembayaran')}>
                    <Ionicons name='chevron-back' size={20} color="black"/>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems:"center", paddingLeft:100}}>
                  <Text style={{textAlign:"center", fontWeight:"bold"}}>4/4: LiveChat</Text>
                </View>
        </View>

            <ScrollView style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                <View style={{alignItems:"center", flexDirection:"column"}}>
                    <Text style={{fontWeight:"bold"}}>Dr. Thesya Marcella</Text>
                    <Text style={{fontSize:10}}>Dokter Kesehatan Jiwa</Text>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20}}>
                    <Image
                    style={{width:30, height:30, borderRadius:20}}
                    source={require("../../../assets/Ava-Dokter-W.jpeg")}
                    />
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>Halo, Apakah ada yang bisa saya bantu?</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20,justifyContent:"right"}}>
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>ya dok, saya sedang batuk dan sakit tenggorokan</Text>
                        <Text>Saya juga mengalami sakit kepala sedikit</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                    <Ionicons name='person-circle-outline' size={30} color="black" width={30} height={30} />
                    </View>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20}}>
                    <Image
                    style={{width:30, height:30, borderRadius:20}}
                    source={require("../../../assets/Ava-Dokter-W.jpeg")}
                    />
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>Sudah Berapa lama anda mengalami gejala ini?</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20, justifyContent:"right"}}>
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>Sekitar tiga hari sekarang. Dan aku juga sangat lelah</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                    <Ionicons name='person-circle-outline' size={30} color="black" width={30} height={30}/>
                    </View>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20}}>
                    <Image
                    style={{width:30, height:30, borderRadius:20}}
                    source={require("../../../assets/Ava-Dokter-W.jpeg")}
                    />
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>Hmm. Sepertinya anda terkena flu</Text>
                        <Text>Minum vitamin setiap empat jam dan banyak istirahat</Text>
                        <Text>Pastikan Anda minum banyak cairan. Hubungi saya jika Anda masih sakit minggu depan</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row", paddingVertical:20, justifyContent:"right"}}>
                    <View style={{backgroundColor:"#edf3ff", borderRadius:15,paddingVertical:5, marginLeft:10}}>
                        <Text>Baik dok terima kasih</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                    <Ionicons name='person-circle-outline' size={30} color="black" width={30} height={30} />
                    </View>
                </View>

                <View style={{justifyContent:"flex-end",alignItems:"center", paddingTop:10}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('FeedbackModal')}>
                        <View style={{backgroundColor:"dodgerblue", height:35, borderRadius:15, width:100}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:15, textAlign:"center", paddingTop:5}}>End Session</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={{flex: 3, justifyContent: 'flex-end', paddingHorizontal:20}}>
                    <View style={{flex:10,flexDirection: 'row',justifyContent:'space-between',alignItems:'center',backgroundColor:"#edf3ff",marginVertical:20, borderRadius:15,paddingVertical:10}}>  
                        <TextInput style={{width:"100%"}}  
                            placeholder="Masukkan text" 
                        />
                        <TouchableOpacity>
                        <Ionicons name='send-sharp' size={20} color="black" width={20} height={20} />  
                        </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
    )
};

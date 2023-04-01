import { Text, View,SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import RincianStyles from './RincianStyles';
import colors from '../../../consts/colors';
import DoctorData from '../../../consts/DoctorData';
import { useNavigation } from '@react-navigation/native';

const ItemRincianScreen = ({item}) =>{
  const navigation = useNavigation();
  return (

    <SafeAreaView>
          <View style={{flexDirection:"row", marginTop:20}}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('KonsultasiScreen')}>
                    <Ionicons name='chevron-back' size={20} color="black"/>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems:"center", paddingLeft:100}}>
                  <Text style={{textAlign:"center", fontWeight:"bold"}}>2/4: Rincian Dokter </Text>
                </View>
          </View>
          <ScrollView horizontal={true} style={{ paddingHorizontal: 5, backgroundColor:colors.white}}>
            <View style={RincianStyles.frame}>
            <ScrollView showsVerticalScrollIndicator={false}
            style={{borderRadius:5, borderColor:colors.grey, backgroundColor:colors.lightblue}}>

            {/* rincian singkat */}
            <View style={{paddingTop:20, alignItems:'center' }}>
                <Image source={item.image}
                  style={{width:100, height:100, borderRadius:50}}/>
                <Text style={RincianStyles.menu}>{item.name}</Text>
                <Text style={{fontSize:15}}>{item.title}</Text>
              <View style={RincianStyles.btntesti}>
              <View style={RincianStyles.row}>
                <Ionicons name="star" size={10} color="colors.orange" />
                <Text style={{fontSize:10}}>{item.rating}</Text>
              </View>
              </View>
                <Text style={{marginTop:5, fontWeight:'bold',fontSize:15, color:colors.red}}>{item.price}</Text>

              {/* Detail Lengkap */}
              <View style={{paddingHorizontal:30, paddingVertical:10, backgroundColor:"white", marginTop:10, borderRadius:10}}>

              <View style={RincianStyles.col}>
              <Text style={RincianStyles.menu}>Bekerja di</Text>
              <Text style={{marginTop:5}}>{item.workplace}</Text>
              </View>

              <View style={RincianStyles.col}>
              <Text style={RincianStyles.menu}>Daerah</Text>
              <Text style={{marginTop:5}}>{item.home}</Text>
              </View>

              <View style={RincianStyles.col}>
              <Text style={RincianStyles.menu}>Lulusan</Text>
              <Text style={{marginTop:5}}>{item.graduate}</Text>
              </View>

              <View style={RincianStyles.col}>
              <Text style={RincianStyles.menu}>Pengalaman</Text>
              <Text style={{marginTop:5}}>{item.experience}</Text>
              </View>
              </View>
            </View>
            </ScrollView>
 
            <TouchableOpacity on onPress={() => navigation.navigate('Login')}>
                <View style={RincianStyles.btnprimary}>
                <Text style={{fontWeight:'bold', color:colors.white}}>
                  Konsultasi Sekarang
                </Text>
                </View>
                </TouchableOpacity>

            </View>

            </ScrollView>
             
</SafeAreaView>
            
  );
};

export default function RincianScreen({ navigation }) {
  
  return (
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {DoctorData.map((v) => (
        <ItemRincianScreen item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>
  );
}

import { Text, View, Image, TouchableOpacity, ScrollView, } from "react-native";
import React, {Component} from "react";
import colors from "../../../../consts/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import DoctorData from "../../../../consts/DoctorData";
import KonsultasiStyles from "./../KonsultasiStyles"
import { useNavigation } from '@react-navigation/native';

// cara 1 
const ItemDoctorcard = ({item}) =>{
const navigation = useNavigation();
return (
  <TouchableOpacity style={KonsultasiStyles.boxcard} onPress={()=> navigation.navigate('RincianScreen')}>
        <View style={{flexDirection:"row"}}>
        <View style={{marginLeft: 15}}>
          <Image
            source={item.image}
            style={{ width: 85, height: 90, borderRadius: 8, marginBottom:5 }}
          />
          </View>

          <View style={KonsultasiStyles.containerText}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <View style={KonsultasiStyles.btntesti}>
              <View style={KonsultasiStyles.row}>
                <Ionicons name="star" size={10} color={colors.orange} />
                <Text style={{fontSize:10}}>{item.rating}</Text>
              </View>
            </View>
          </View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row', marginHorizontal:15}}>
          <Text style={{ marginLeft:20, marginVertical:4, fontWeight:'600', color:colors.grey, fontSize:10}}>Tersedia</Text>
          <TouchableOpacity style={KonsultasiStyles.btnprimary}>
            <Text style={{fontWeight:'600',color:colors.white, fontSize:10}}>Konsultasi</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
)
}

export default function DoctorCard() {
  return (
    <View style={{height:310}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {DoctorData.map((v) => (
        <ItemDoctorcard item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>
     );
    }

    

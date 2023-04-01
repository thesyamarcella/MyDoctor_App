import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, } from "react-native";
import React, {Component} from "react";
import colors from "../../../../consts/colors";
import DoctorData from "../../../../consts/DoctorData";

// cara 1 
const ItemPembayaranScreen = ({item}) =>{
return (
  <SafeAreaView style={{backgroundColor:colors.lightblue}}>
  <View>
  <View style={{backgroundColor:"white", flexDirection:"row", width:320, height:445}}>
  <Image
            source={item.image}
            style={{ width: 65, height: 65, borderRadius: 30, marginLeft: 15 }}
          />

          <View style={styles.containerText}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            </View>
    </View>

    <View style={{backgroundColor:colors.lightgrey, height:300}}>
    <Text>jenis Pelayanan</Text>
    <Text>Konsultasi</Text>

    <Text>jenis Pelayanan</Text>
    <Text>Konsultasi</Text>
    </View>


    </View>
  </SafeAreaView>
)
}

export default function PemabayaranScreen({ navigation }) {
  
  return (
    <View style={{height:310}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {DoctorData.map((v) => (
        <ItemPembayaranScreen item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>
     );
    }

    

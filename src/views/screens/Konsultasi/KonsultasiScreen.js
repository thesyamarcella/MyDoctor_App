import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native'
import DoctorCard from './widget/DoctorCard'
import KategoriSection from './widget/KategoriSection'
import colors from '../../../consts/colors'
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function KonsultasiScreen({navigation}) {
    return (
      <ScrollView>
      <StatusBar hidden={false} />

      <View style={{flexDirection:"row", marginTop:20}}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Ionicons name='chevron-back' size={20} color="black"/>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems:"center", paddingLeft:100}}>
                  <Text style={{textAlign:"center", fontWeight:"bold"}}>1/4: Pilih Dokter </Text>
                </View>
        </View>

      <View style={{backgroundColor:colors.white, paddingHorizontal:20}}>
      {/* <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false} > */}
        <View style={{justifyContent:'center', alignItems:'center', marginVertical:10}}>
          <View style={styles.Searchbar}>
             <TextInput style={{width:"100%"}}
             placeholder="Cari Apa Hari Ini ?" />
             <Ionicons
               name="search"
               size={20}
               color="black"
               width={20}
               height={20}             
               />
           </View>
        </View>

        
        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:5}}>
            <View style={{flexDirection:"column"}}>
            <Text style={{fontWeight:'bold' }}>Departemen</Text>
            <Text style={{fontWeight:'400' }}>Temukan Dokter Terbaik</Text>
            </View>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold', color:colors.orange}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <DoctorCard />
        
        
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:5}}>
            <Text style={{fontWeight:'bold'}}>Cari Berdasarkan Kategori</Text>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold', color:colors.orange}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <KategoriSection />
          </View>
        
      </ScrollView>
    )
  }

const styles = StyleSheet.create({
  Searchbar: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.lightblue,
    marginVertical: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal:25,
    width:300
  },

});
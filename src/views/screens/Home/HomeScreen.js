import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native'
import HomeStyle from './HomeStyle'
// import ProfileHalo from './Widgets/ProfileHalo'
import Menu from './Widgets/Menu'
import DepartmentSection from './Widgets/DepartmentSection'
import DoctorSection from './Widgets/DoctorSection'
import ProfileHalo from './Widgets/ProfileHalo'
import colors from '../../../consts/colors'
import React, { Component } from 'react'

export default function HomeScreen({navigation}) {
    return (
      <SafeAreaView>
      <ScrollView>
      <StatusBar hidden={false} />
      <View style={{backgroundColor:colors.white, paddingHorizontal:20}}>
      {/* <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false} > */}

        <ProfileHalo />
        <Menu />

        
        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:5}}>
            <Text style={{fontWeight:'bold' }}>Departemen</Text>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold', color:colors.orange}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <DepartmentSection />
        
        
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:5}}>
            <Text style={{fontWeight:'bold'}}>Dokter Terbaik</Text>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold', color:colors.orange}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <DoctorSection />
          </View>
        
      {/* </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
    )
  };
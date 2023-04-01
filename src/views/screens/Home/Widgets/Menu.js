import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import React from 'react';
import colors from '../../../../consts/colors';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{marginBottom:20}}>
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

           
            {/* onPress={() => this.props.navigation.navigate("ListDokter")} */}
            
            <View style={styles.Menu}>
            <TouchableOpacity>
              <View style={{ justifyContent: "center", alignItems:"center"}}>
                <Image
                  style={styles.Image}
                  source={require("../../../../assets/medication.png")}
                />
                <Text style={{fontWeight:'600'}}>Beli Obat</Text>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('KonsultasiScreen')}>
                <View style={{ justifyContent: "center",alignItems:"center"}}>
                <Image
                  style={styles.Image}
                  source={require("../../../../assets/online.png")}
                />
                <Text style={{fontWeight:'600'}}>Konsultasi</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{ justifyContent: "center",alignItems:"center"}}>
                <Image
                  style={styles.Image}
                  source={require("../../../../assets/clinic.png")}
                />
                <Text style={{fontWeight:'600'}}>Reservasi</Text>
              </View>
          </TouchableOpacity>
          </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  Menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Searchbar: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.lightblue,
    marginVertical: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal:25,
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth:1,
    borderColor:colors.lightgrey,
    backgroundColor:colors.white,
    marginHorizontal: 20,
    marginBottom:5
  },
});


import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, {Component} from "react";
import DepartmentData from "../../../../consts/DepartmentData";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../../consts/colors";


// cara 1 
const ItemKategori = ({item}) =>{
return (
  <TouchableOpacity style={styles.boxkategori}>
          <Image
            source={item.image}
            style={{ width: 65, height: 65, borderRadius: 30}}
          />

          <View style={{marginTop:15}}>
            <Text style={{ fontSize:12 }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
)
}

export default function KategoriSection({ navigation }) {
  
  return (
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {DepartmentData.map((v) => (
        <ItemKategori item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>
  );
}
// end

const styles = StyleSheet.create({
  boxkategori: {
    width: 110,
    height: 125,
    borderRadius: 15,
    marginVertical: 10,
    padding:10,
    alignItems: "center",
    justifyContent: "center"
  },
});
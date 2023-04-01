import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, {Component} from "react";
import colors from "../../../../consts/colors";
import DepartmentData from "../../../../consts/DepartmentData";
import { ScrollView } from "react-native-gesture-handler";


// cara 1 
const ItemDepartment = ({item}) =>{
return (
  <TouchableOpacity style={styles.box}>
          <Image
            source={item.image}
            style={{ width: 60, height: 60, borderRadius: 30}}
          />

          <View style={{marginTop:10}}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.jumlah}</Text>
          </View>
        </TouchableOpacity>
)
}

export default function DepartmentSection({ navigation }) {
  
  return (
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {DepartmentData.map((v) => (
        <ItemDepartment item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>
  );
}
// end

const styles = StyleSheet.create({
  box: {
    width: 130,
    height: 125,
    borderRadius: 15,
    backgroundColor: colors.lightblue,
    marginVertical: 10,
    padding:10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  },
});
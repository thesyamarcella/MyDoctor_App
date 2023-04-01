import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import React, {Component} from "react";
import colors from "../../../../consts/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import DoctorData from "../../../../consts/DoctorData";


// cara 1 
const ItemDoctor = ({item}) =>{
return (
  <TouchableOpacity style={styles.box}>
          <Image
            source={item.image}
            style={{ width: 65, height: 65, borderRadius: 30, marginLeft: 15 }}
          />

          <View style={styles.containerText}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.title}</Text>
            <View style={styles.btn}>
              <View style={styles.row}>
                <Ionicons name="star" size={15} color={colors.orange} />
                <Text>{item.rating}</Text>
                <Text>{item.review}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
)
}

export default function DoctorSection({ navigation }) {
  
  return (
    <View>
    <ScrollView>
      {DoctorData.map((v) => (
        <ItemDoctor item={v} key={v.id}/>
      ))}
      </ScrollView>
    </View>


    // cara2
    /* <View>
      {arrOfObject.map((v) => (
        <View style={styles.box}>
          <Image
            source={Profile}
            style={{ width: 70, height: 70, borderRadius: 30, marginLeft: 30 }}
          />

          <View style={styles.containerText}>
            <Text style={{ fontWeight: "bold" }}>{v.title}</Text>
            <Text>Dokter Umum</Text>
            <View style={styles.btn}>
              <View style={styles.row}>
                <Ionicons name="star" size={15} color={colors.orange} />
                <Text>{v.rating}</Text>
                <Text>{v.review}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View> 
    const arrOfObject = [
  {
    id: 1,
    title: "Dr.Teca marcella",
    rating: "4.9",
    review: "(100+ reviews)",
  },
  {
    id: 2,
    title: "Dr.Tsbsufbsubf",
    rating: "4.9",
    review: "(100+ reviews)",
  },
  {
    id: 3,
    title: "Dr.Teca marcella",
    rating: "5.0",
    review: "(100+ reviews)",
  },
  {
    id: 4,
    title: "Dr.Teca marcella",
    rating: "4.9",
    review: "(200+ reviews)",
  },
  {
    id: 5,
    title: "Dr.Teca marcella",
    rating: "4.3",
    review: "(100+ reviews)",
  },
];*/
  );
}
// end

const styles = StyleSheet.create({
  box: {
    width: 330,
    height: 90,
    borderRadius: 15,
    backgroundColor: colors.lightblue,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  containerText: {
    marginLeft: 10,
  },
  btn: {
    width: 150,
    height: 25,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius:15,
    paddingVertical:2,
    marginTop:5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});



// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import colors from "../../../../consts/colors";
// import HomeStyle from "../HomeStyle";
// import DoctorData from "";

// export default function DoctorSection() {
//   const ItemDoctor = ({ item }) => {
//     return (
//       <View key={item.id} style={[HomeStyle.card, styles.cardFeeds]}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image
//             style={{ width: 50, height: 50 }}
//             source={require("../../../../assets/ava-thesya.png")}
//           />
//           <View style={{ flex: 1, flexDirection: "column", marginLeft: 15 }}>
//             <Text style={{ fontWeight: "bold", marginTop: 3 }}>
//               {item.nama}
//             </Text>
//             <Text style={{ marginVertical: 2 }}>{item.title}</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate("ListDokter")}
//             style={{ borderColor: "colors.lightgrey", borderWidth: 0.5 }}
//           >
//             <Text>
//               {item.icon}
//               {item.rating}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
// }

// const ListCourse = () => {
//   return (
//     <View style={HomeStyle.row}>
//       <View style={{ flex: 1 }}>
//         <ScrollView>
//           {DoctorData.map((v) => (
//             <ItemCourse item={v} key={v.id} />
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardFeeds: {
//     backgroundColor: colors.lightblue,
//     borderColor: colors.purple,
//     borderRadius: 15,
//     padding: 10,
//     height: 70,
//     marginBottom: 20,
//   },
// });

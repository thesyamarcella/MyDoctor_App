import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import HomeScreen from "./src/views/screens/Home/HomeScreen";
import DepartmentSection from "./src/views/screens/Home/Widgets/DepartmentSection";
import DoctorSection from "./src/views/screens/Home/Widgets/DoctorSection";
import ProfileHalo from "./src/views/screens/Home/Widgets/ProfileHalo"
import Menu from "./src/views/screens/Home/Widgets/Menu";
import KonsultasiScreen from "./src/views/screens/Konsultasi/KonsultasiScreen";
import KategoriSection from "./src/views/screens/Konsultasi/widget/KategoriSection";
import DoctorCard from "./src/views/screens/Konsultasi/widget/DoctorCard";
import RincianScreen from "./src/views/screens/Rincian/RincianScreen";
import RincianPembayaran from "./src/views/screens/Rincian/RincianPembayaran";
import ChatScreen from "./src/views/screens/LiveChat/ChatScreen";
import Login from "./src/views/screens/Authentifications/Login";
import SignUp from "./src/views/screens/Authentifications/SignUp";
import Feedback from "./src/views/screens/FeedBack/Feedback";
import FeedbackModal from './src/views/screens/FeedBack/FeedbackModal';
import SplashScreen from './src/views/screens/Splash/SplashScreen';
import Konfirmasi from './src/views/screens/Rincian/Konfirmasi';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
          {/* Home Screen */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DoctorSection" component={DoctorSection} />
          <Stack.Screen name="DepartmentSection" component={DepartmentSection} />
          <Stack.Screen name="ProfileHalo" component={ProfileHalo} />
          <Stack.Screen name="Menu" component={Menu} />

        {/* konsultasi Screen */}
          <Stack.Screen name="KonsultasiScreen" component={KonsultasiScreen} />
          <Stack.Screen name="KategoriSection" component={KategoriSection} />
          <Stack.Screen name="DocterCard" component={DoctorCard} />

        {/* Rincian Screen */}
          <Stack.Screen name="RincianScreen" component={RincianScreen} />

          {/* Authentification */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />

          {/* Rincian Pembayaran */}
          <Stack.Screen name="RincianPembayaran" component={RincianPembayaran} />

          {/* Konfirmasi */}
          <Stack.Screen name="Konfirmasi" component={Konfirmasi} />

          {/* LiveChat */}
          <Stack.Screen name="ChatScreen" component={ChatScreen} />

          {/* Rating */}
          {/* <Stack.Screen name="Feedback" component={Feedback} /> */}
          <Stack.Screen name="FeedbackModal" component={FeedbackModal} />
        </Stack.Navigator>
      </NavigationContainer>    
    )
  }
}

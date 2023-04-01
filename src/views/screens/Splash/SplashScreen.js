import React, { Component } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Logo from '../../../../assets/Splash.png';

class SplashScreen extends Component {
    constructor(props) {
        super (props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('HomeScreen'))
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
               <Image style={{height: '100%', width: '100%'}} 
               resizeMode={'contain'}
               source={Logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
     alignItems: 'center', 
     justifyContent: "center"
  }
})

export default SplashScreen;
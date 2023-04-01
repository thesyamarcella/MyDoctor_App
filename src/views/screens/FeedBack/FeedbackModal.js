import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TextInput
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const FeedbackModal = () => {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View style ={{marginVertical:10, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>Sesi kamu telah berakhir,</Text>
                    <Text style={{fontWeight:"bold"}}>Bagaimana Sesi kamu hari ini?</Text>
                </View>

                <AirbnbRating
                count={5}
                reviews={['Very Bad', 'Bad', 'Good', 'Great', 'Exelent']}
                defaultRating={0}
                size={20}
                showRating={false}
                />

                <View style={{alignItems:'center',justifyContent:'center'}}>
                <TextInput style={{backgroundColor:"#edf3ff",marginVertical:20, borderRadius:15,height:100, width:'90%', padding:10}}   
                />
            </View>

            <View style={{justifyContent:"flex-end",alignItems:"center", paddingTop:10}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={{backgroundColor:"dodgerblue", height:35, borderRadius:15, width:150}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:15, textAlign:"center", paddingTop:5}}>Kirim</Text>
                    </View>
                </TouchableOpacity>
            </View>
      </ModalPoup>
      <Button title="Akhiri Sesi" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default FeedbackModal;
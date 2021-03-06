/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  // Image,
  Alert,
  Modal,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {GradientGreen} from '../../assets';
// import {GradientRed} from '../../assets';
// import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import {Gap} from '../../components';
// import {COLORS} from '../../utils';
import {Default, Styles} from '../style';

const Splash = ({navigation}) => {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHeader = (
    <View style={Styles.modalHeader}>
      <Text style={Styles.title}>SETTING MEETING ROOM</Text>
      <View style={Styles.divider} />
    </View>
  );

  const modalBody = (
    <View style={Styles.modalBody}>
      <DropDownPicker
        items={[
          {label: 'Room 1', value: '1'},
          {label: 'Room 2', value: '2'},
          {label: 'Room 3', value: '3'},
          {label: 'Room 4', value: '4'},
          {label: 'Room 5', value: '5'},
          {label: 'Room 6', value: '6'},
          {label: 'Room 7', value: '7'},
        ]}
        placeholder="Select a Room"
        // defaultValue=""
        containerStyle={Default.drop}
        style={{backgroundColor: 'white'}}
        dropDownStyle={{backgroundColor: 'white'}}
        // onChangeItem={(item) => console.log(item.label, item.value)}
        onChangeItem={(item) => setSelectedRoom(item.value)}
      />
      <Text>Please confirm the room you are going to set</Text>
      <View style={{flexDirection: 'row-reverse', margin: 10}}>
        <TouchableOpacity
          style={{...Styles.actions, backgroundColor: '#db2828'}}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={Styles.actionText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={{...Styles.actions, backgroundColor: '#21ba45'}}>
          <Text style={Styles.actionText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // const modalFooter = (
  //   <View style={Styles.modalFooter}>
  //     <View style={Styles.divider} />
  //     <View style={{flexDirection: 'row-reverse', margin: 10}}>
  //       <TouchableOpacity
  //         style={{...Styles.actions, backgroundColor: '#db2828'}}
  //         onPress={() => {
  //           setModalVisible(!modalVisible);
  //         }}>
  //         <Text style={Styles.actionText}>No</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         onPress={() => {
  //           setModalVisible(false);
  //         }}
  //         style={{...Styles.actions, backgroundColor: '#21ba45'}}>
  //         <Text style={Styles.actionText}>Yes</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

  const modalContainer = (
    <View style={Styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {/* {modalFooter} */}
    </View>
  );

  const modal = (
    <Modal
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal haS been closed.');
      }}>
      <View style={Styles.modal}>
        <View>{modalContainer}</View>
      </View>
    </Modal>
  );

  return (
    <View style={Styles.container}>
      {modal}
      <View style={Styles.row}>
        <ImageBackground source={GradientGreen} style={Styles.container}>
          <View style={Styles.dasboardBO}>
            <Text style={Styles.textBO}>ROOM {selectedRoom}</Text>
          </View>
          <View style={Styles.dasboardBO}>
            <Text style={Styles.textDate}>Monday, 22 February 2021</Text>
          </View>
          <View style={Styles.dasboardBO}>
            <Text style={Styles.textBO}>FREE</Text>
          </View>
          <View style={Styles.viewBtn}>
            <TouchableOpacity
              style={Styles.btnPlus}
              onPress={() => navigation.replace('Splash')}>
              <Text style={Styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.dasboardBO2}>
            <Text style={Styles.textWell}>WELLCOME MEETING ROOM</Text>
            <Text style={Styles.textWell2}>
              Please, Click button add for booking Meeting Room!
            </Text>
          </View>
        </ImageBackground>
        <View style={Styles.viewPIC}>
          <View style={[Default.flex1, Default.alignContent]}>
            <Gap height={50} />
            <Text style={Styles.textBig}>Schedule</Text>
            <Gap height={30} />
            <Text style={Styles.textBlack}>PIC</Text>
            <Gap height={20} />
            <Text style={Styles.textBlack}>Mr Joko Purnomo</Text>
            <Text style={Styles.textBlack}>08:30 : 10:00</Text>
          </View>
          <TouchableOpacity
            style={Styles.btnSetting}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Feather name="settings" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Splash;

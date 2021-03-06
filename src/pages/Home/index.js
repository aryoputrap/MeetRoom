/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  // Image,
  // ImageBackground,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {GradientGreen} from '../../assets';
// import {GradientRed} from '../../assets';
import {Gap, Room, RoomFree, Input} from '../../components';
// import TimePicker from 'react-native-24h-timepicker';
// import {COLORS} from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker';
import {Default, Styles} from '../style';
import {Calendar} from 'react-native-calendars';

const Home = () => {
  const [selected, setSelected] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedEnd, setEnd] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHeader = (
    <View style={Styles.modalHeader}>
      <Text style={Styles.title}>SETTING MEETING ROOM 2</Text>
      <View style={Styles.divider} />
    </View>
  );

  const modalBody = (
    <View style={Styles.modalBody}>
      <Input
        label="PIC"
        placeholder="Please enter your name"
        // value={form.email}
        // onChangeText={value => setForm('email', value)}
      />
      <Gap height={10} />
      <View style={Default.row}>
        <DropDownPicker
          items={[
            {label: '07:00', value: '07:00'},
            {label: '07:30', value: '07:30'},
            {label: '08:00', value: '08:00'},
            {label: '08:30', value: '08:30'},
            {label: '09:00', value: '09:00'},
            {label: '09:30', value: '09:30'},
            {label: '10:00', value: '10:00'},
          ]}
          placeholder="Select Start"
          // defaultValue=""
          containerStyle={Default.drop2}
          style={{backgroundColor: 'white'}}
          dropDownStyle={{backgroundColor: 'white'}}
          // onChangeItem={(item) => console.log(item.label, item.value)}
          onChangeItem={(item) => setSelectedRoom(item.value)}
        />
        <Gap width={20} />
        <DropDownPicker
          items={[
            {label: '07:00', value: '07:00'},
            {label: '07:30', value: '07:30'},
            {label: '08:00', value: '08:00'},
            {label: '08:30', value: '08:30'},
            {label: '09:00', value: '09:00'},
            {label: '09:30', value: '09:30'},
            {label: '10:00', value: '10:00'},
          ]}
          placeholder="Select End"
          // defaultValue=""
          containerStyle={Default.drop2}
          style={{backgroundColor: 'white'}}
          dropDownStyle={{backgroundColor: 'white'}}
          // onChangeItem={(item) => console.log(item.label, item.value)}
          onChangeItem={(item) => setEnd(item.value)}
        />
      </View>
      <View style={Default.row}>
        <View style={[Default.row, Styles.boDate]}>
          <Text>{selected}</Text>
          <Gap width={10} />
        </View>
        <Gap width={10} />
        <View style={[Default.row, Styles.boDate]}>
          <Text>{selectedRoom}</Text>
          <Gap width={10} />
          <Text>-</Text>
          <Gap width={10} />
          <Text>{selectedEnd}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row-reverse', marginTop: 30}}>
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

  const modalContainer = (
    <View style={Styles.modalContainer}>
      {modalHeader}
      {modalBody}
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
  // const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

  // const toggleSwitch = () => {
  //   setShowMarkedDatesExamples(!showMarkedDatesExamples);
  // };

  const onDayPress = (day) => {
    setSelected(day.dateString);
    console.log(day);
  };

  // const getDisabledDates = (startDate, endDate, daysToDisable) => {
  //   const disabledDates = {};
  //   const start = moment(startDate);
  //   const end = moment(endDate);

  //   for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
  //     if (_.includes(daysToDisable, m.weekday())) {
  //       disabledDates[m.format('YYYY-MM-DD')] = {disabled: true};
  //     }
  //   }
  //   return disabledDates;
  // };

  return (
    <View style={Default.flex2}>
      {modal}
      <View style={Default.row}>
        <View style={Default.calenderx}>
          <Gap height={20} />
          <Text style={Styles.textDatehome}>Date</Text>
          <Gap height={20} />
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'red',
                selectedTextColor: 'white',
              },
            }}
          />
        </View>
        <View style={[Default.flex1, Default.alignContent]}>
          <Gap height={20} />
          <Text style={Styles.textBig}>Schedule</Text>
          <View style={Styles.scHorizontal}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={[Default.row, Styles.btnTime]}>
                <Text>07:00 - 07:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Default.row, Styles.btnTime]}>
                <Text>08:00 - 08:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Default.row, Styles.btnTime]}>
                <Text>08:00 - 08:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Default.row, Styles.btnTime]}>
                <Text>08:00 - 08:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Default.row, Styles.btnTime]}>
                <Text>08:00 - 08:30</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <ScrollView style={Styles.scRoom}>
            <View style={Default.row}>
              <Room
                room={'ROOM 1'}
                name={'Mr Joko'}
                time={'07:00'}
                endtime={'07:30'}
              />
              <RoomFree
                room={'ROOM 2'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
            <View style={Default.row}>
              <RoomFree
                room={'ROOM 3'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
              <RoomFree
                room={'ROOM 4'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
            <View style={Default.row}>
              <Room
                room={'ROOM 5'}
                name={'Mr Joko'}
                time={'07:00'}
                endtime={'07:30'}
              />
              <RoomFree
                room={'ROOM 6'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
            <View style={Default.row}>
              <RoomFree
                room={'ROOM 7'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

{
  /* <View style={Styles.btnBookPic}>
            <View style={Styles.titleViewPic}>
              <Text style={Styles.title}> ROOM 1</Text>
            </View>
            <View style={Styles.pic}>
              <Text style={Styles.namePic}>Mr Joko</Text>
              <Text style={Styles.timePic}>07:00 - 08:30</Text>
            </View>
          </View> */
}
{
  /* <TouchableOpacity style={Styles.btnBook}>
            <View style={Styles.titleView}>
              <Text style={Styles.title}> ROOM 2</Text>
            </View>
            <View style={Styles.pic}>
              <IconAddPhoto />
            </View>
          </TouchableOpacity> */
}

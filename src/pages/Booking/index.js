import React from 'react';
import {
  StyleSheet,
  // Text,
  ScrollView,
  View,
  // Image,
  //   ImageBackground,
  //   TouchableOpacity,
} from 'react-native';
import {Calender} from '../../components';
// import {GradientGre/en} from '../../assets';
// import {GradientRed} from '../../assets';
// import {Agenda} from '../../components';
// import {COLORS} from '../../utils';
// import DropDownPicker from 'react-native-dropdown-picker';

const Splash = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.calender}>
        <Calender />
      </View>
      {/* <View>
        <DropDownPicker
          items={[
            {label: 'Item 1', value: 'item1'},
            {label: 'Item 2', value: 'item2', selected: true},
          ]}
          defaultValue="item1"
          containerStyle={{height: 40}}
          style={{backgroundColor: 'red'}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => console.log(item.label, item.value)}
        />
      </View> */}
      <View style={styles.padding} />
    </ScrollView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  // padding {
  // },
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20,
  },
  calender: {
    padding: 30,
    // width: '50%',
    // height: '50%',
  },
  row: {
    flexDirection: 'row',
    flex: 2,
  },
  dasboardBO: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // borderWidth: 1,
  },
  dasboardBO2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 40,
  },
  dasboardDate: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textDate: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textBO: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textWell: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textWell2: {
    fontSize: 15,
    fontWeight: '100',
    color: 'white',
  },
  btnPlus: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 100,
    opacity: 0.5,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 100,
    height: 100,
  },
  viewBtn: {
    paddingBottom: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  plus: {
    fontSize: 90,
    color: 'white',
    marginBottom: 10,
  },
});

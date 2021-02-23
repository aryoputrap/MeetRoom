/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  // Image,
  //   ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import CardView from 'react-native-cardview';
// import {GradientGre/en} from '../../assets';
import {JSONCard} from '../../assets';
import {Button} from '../../components';
// import {COLORS} from '../../utils';

const Splash = ({navigation}) => {
  // const data = JSONCard.data;

  const renderData = (data) => {
    if (data.length === 0) {
      return (
        <Text style={{textAlign: 'center', padding: 10, color: 'black'}}>
          Data Empty
        </Text>
      );
    }
    return data.map((item) => {
      return (
        <View
          key={item.id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <View style={styles.name}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.row3}>
            <Text>{item.booking}</Text>
            <Text>-</Text>
            <Text>{item.endBooking}</Text>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity
              style={styles.btnUpdate}
              onPress={() => this.deleteData(item.id)}>
              <Text>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => this.deleteData(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bo}>
        <Text style={styles.whiteText}>Monday, 22 February 2021</Text>
        <Text style={styles.whiteText}>BOOKING SCHEDULE</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.titleView}>
            <Text style={styles.title}> ROOM 1</Text>
          </View>
          {/* <View>{renderData(JSONCard.data)}</View> */}
        </View>
      </View>
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
    </ScrollView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'blue',
  },
  sc: {
    width: '100%',
    height: '30%',
  },
  btnUpdate: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginRight: 10,
    width: 70,
    height: 30,
  },
  btnDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    marginRight: 10,
    width: 70,
    height: 30,
  },
  card: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 2,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    width: 90,
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
  name: {
    width: 100,
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
  whiteText: {
    color: 'white',
    fontSize: 20,
  },
});

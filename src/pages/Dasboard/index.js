import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {GradientGreen} from '../../assets';
// import {GradientRed} from '../../assets';
import {Agenda} from '../../components';
// import {COLORS} from '../../utils';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ImageBackground source={GradientGreen} style={styles.container}>
          <View style={styles.dasboardBO}>
            <Text style={styles.textDate}>Monday, 22 February 2021</Text>
          </View>
          <View style={styles.dasboardBO}>
            <Text style={styles.textBO}>FREE</Text>
          </View>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => navigation.replace('Splash')}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dasboardBO2}>
            <Text style={styles.textWell}>WELLCOME MEETING ROOM</Text>
            <Text style={styles.textWell2}>
              Please, Click button add for booking Meeting Room!
            </Text>
          </View>
        </ImageBackground>
        {/* <View style={styles.dasboardDate}>
          <Text>Booking Schedule</Text>

        </View> */}
        <Agenda />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

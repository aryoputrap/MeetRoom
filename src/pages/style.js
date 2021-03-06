import {Dimensions, StyleSheet} from 'react-native';
// import {StyleSheet} from 'react-native';
import {colors} from '../utils';

const {width, height} = Dimensions.get('window');

export const fontBold = {
  fontWeight: 'bold',
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

const Default = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  calender: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calenderx: {
    width: width * 0.1,
    flex: 1.5,
    height,
  },
  drop: {
    width: width * 0.35,
    height: 50,
  },
  drop2: {
    width: width * 0.15,
    height: 50,
  },
  flex2: {
    flex: 2,
    backgroundColor: colors.cardLight,
  },
  alignContent: {
    alignItems: 'center',
    alignContent: 'center',
  },
});

const Styles = StyleSheet.create({
  // PAGE DASBOARD
  padding: {
    padding: 20,
  },
  center: {
    ...center,
  },
  scRoom: {
    width: width * 0.45,
    marginLeft: width * 0.1,
    marginBottom: height * 0.25,
  },
  viewPIC: {
    width: width * 0.2,
  },
  boDate: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
  btnSetting: {
    padding: 20,
  },
  btnTime: {
    borderColor: '#ff390a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    padding: 5,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 3,
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
    alignItems: 'flex-start',
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
  textBlack: {
    fontSize: 20,
    fontWeight: '100',
    color: colors.black,
  },
  textBig: {
    fontSize: 30,
    color: colors.black,
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
    color: colors.white,
    marginBottom: 10,
  },
  //HOME
  pageHome: {
    flex: 3,
  },
  textDatehome: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  btnBook: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20,
    width: '30%',
    height: 200,
  },
  bo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'blue',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 20,
    height: 80,
    backgroundColor: 'orange',
  },
  scHorizontal: {
    height: height * 0.1,
    width: width * 0.38,
    marginBottom: 10,
    marginTop: 10,
    // borderColor: 'blue',
    // borderWidth: 2,
    // padding: 5,
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
    marginBottom: 100,
    bottom: 100,
  },
  row2: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    marginLeft: 30,
    // padding: 30,
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
  name: {
    width: 100,
  },
  whiteText: {
    top: 20,
    color: 'white',
    fontSize: 20,
  },
  // Modal
  modal: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'grey',
    width: width * 0.4,
    height: height * 0.7,
    borderRadius: 5,
  },
  modalHeader: {},
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    color: '#000',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },
  modalBody: {
    backgroundColor: '#fff',
    width: width * 0.4,
    height: height * 0.6,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  modalFooter: {},
  actions: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    color: '#fff',
  },
});

export {Default, Styles};

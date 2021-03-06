import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Room = ({room, name, time, endtime}) => {
  return (
    <View style={styles.btnBookPic}>
      <View style={styles.titleViewPic}>
        <Text style={styles.title}>{room}</Text>
      </View>
      <View style={styles.pic}>
        <Text style={styles.namePic}>{name}</Text>
        <Text style={styles.timePic}>
          {time} - {endtime}
        </Text>
      </View>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  btnBookPic: {
    marginLeft: 20,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    width: '35%',
    height: '95%',
  },
  titleViewPic: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 20,
    height: 80,
    backgroundColor: 'red',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  pic: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  namePic: {
    color: 'black',
    fontSize: 20,
  },
  timePic: {
    color: 'black',
    fontSize: 20,
  },
  titleWrapper: {flex: 1},
  // title: {
  //   fontSize: 16,
  //   fontFamily: fonts.primary[600],
  //   color: colors.text.primary,
  //   maxWidth: '90%',
  // },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {width: 80, height: 60, borderRadius: 11},
});

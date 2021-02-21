import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Gap} from '../../components';
import {ILLogo, ILGetStarted} from '../../assets';
import {colors, fonts} from '../../utils';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          PocketYou with a convenient digital transaction innovation
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginTop: 91,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});

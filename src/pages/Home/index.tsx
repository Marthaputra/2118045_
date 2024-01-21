import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ImageHeader, Logo} from '../../assets';
import {Saldo} from '../../components';
import {WARNA_LIGHTBG} from '../../utils/constant';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang</Text>
          <Text style={styles.username}>Martha</Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: WARNA_LIGHTBG,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.33,
    paddingHorizontal: 4,
    paddingTop: 18,
  },
  logo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.09,
  },
  hello: {
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.08,
  },
  selamat: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#FFFFFF',
  },
  username: {
    fontSize: 30,
    fontFamily: 'SquadOne-Regular',
    color: '#FFFFFF',
  },
});

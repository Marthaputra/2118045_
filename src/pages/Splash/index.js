import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { SplashBackground } from '../../assets'
import { ImageBackground } from "react-native";


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout( () => {
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);  

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>

    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Withdraw,Deposit} from '../../assets'
import { TouchableOpacity } from 'react-native-windows'

const ButtonIcon = ({title}) => {

  const Icon = () => {
    if(title === "Deposit") return <Deposit/>

    if(title === "Withdraw") return <Withdraw/>

    return <Deposit/>
  }
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.Icon}>
            <Icon/>
        </View>
        <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    Icon: {
        // backgroundColor: '',
        padding:10,
        borderRadius:25,
    },
    Text: {
        fontFamily: 'Montserrat-Regular',
        color: '#222222'
    },
    container: {
        alignItems: 'center'
    }
})
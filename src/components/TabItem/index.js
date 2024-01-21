import { StyleSheet, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconAkun, IconAkunActive, Home, HomeActive, Inbox, InboxActive} from '../../assets/icons'
import {WARNA_UTAMA,WARNA_DISABLE} from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === "Home") return isFocused ?<HomeActive/> : <Home/>
    if (label === "Akun") return isFocused ?<IconAkunActive/> : <IconAkun/>
    if (label === "Inbox") return isFocused ?<InboxActive/> : <Inbox/>
    return <Home/>
  }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <Icon />
        {/* <Text style={styles.Text(isFocused)}>{label}</Text> */}
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
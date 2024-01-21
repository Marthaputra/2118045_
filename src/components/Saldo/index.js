import { StyleSheet, Text, View, Dimensions,ImageBackground } from 'react-native'
import React from 'react'
import {SaldoBackground,Withdraw,Deposit} from '../../assets'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
return (
    <View style={styles.container}>
        <ImageBackground source={SaldoBackground} style={styles.background}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.saldo}>Balance     $ </Text>
                    <Text style={styles.uang}>0,00</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.id}>ID :</Text>
                    <Text style={styles.nomor}>1124 - 2456 - 44321 </Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                    <ButtonIcon title={'Deposit'}/>
                    <Gap width={10}/>
                    <ButtonIcon title={'Withdraw'}/>
            </View>
        </ImageBackground>
    </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDC92E',
        padding: 19,
        marginHorizontal: 20,
        borderRadius: 28,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        marginTop: -windowHeight*0.08,
        flexDirection: 'row'
    },
    background: {
        width: windowWidth*0.84,
        height: windowHeight*0.17,
        paddingHorizontal: 0.4,
        paddingVertical: 0.2
    },
    uang: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    saldo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    id: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
    },
    nomor: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasiSaldo: {
        width: '60%',

    },
    buttonAksi:{
        flex : 6,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-start'
    }
})
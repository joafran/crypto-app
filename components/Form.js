import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { Picker } from '@react-native-community/picker';
import axios from 'axios';
import {url} from './CryptoAPI';

const Form = ({coin, crypto, setCoin, setCrypto, setApiQuery}) => {
    const [cryptos, setCryptos] = useState("");

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(url)
            setCryptos(result.data.Data);
        }
        fetchData();
    }, [])

    const handleCoin = (coin) => {
        setCoin(coin)
    }

    const handleCrypto = (cryptocurrency) => {
        setCrypto(cryptocurrency)
    }

    const quotePrice = () => {
        if(coin.trim() === '' || crypto.trim() === '') {
            showAlert();
            return;
        }
        setApiQuery(true)
    }

    const showAlert = () => {
        Alert.alert(
            'Error!',
            'Both fields are required',
            [
                {
                    text: 'OK'
                }
            ]
        )
    }

    return (
        <View>
            <Text style={styles.label}>Coin</Text>
                <Picker selectedValue={coin} onValueChange={ coin => handleCoin(coin)}>
                    <Picker.Item label="- Select Item -" value="" />
                    <Picker.Item label="United States Dollar (USD)" value="USD" />
                    <Picker.Item label="Argentinian Peso" value="ARS" />
                    <Picker.Item label="Pounds" value="GBP" />
                    <Picker.Item label="Euro" value="EUR" />
                </Picker>
            
            <Text style={styles.label}>Cryptocurrency</Text>
            <Picker
                testID="select-picker"
                selectedValue={crypto}
                onValueChange={ crypt => handleCrypto(crypt)}
            >
                <Picker.Item label="- Select Item -" value="" />
                {
                    cryptos ? cryptos.map( crypt => (
                        <Picker.Item
                        testID="crypto-item" 
                        key={crypt.CoinInfo.Id} 
                        label={crypt.CoinInfo.FullName} 
                        value={crypt.CoinInfo.Name} 
                        />
                    )) : <Text>Loading...</Text>
                }
            </Picker>

            <TouchableHighlight
            style={styles.btn}
            onPress={ () => quotePrice()}
            >
                <Text style={styles.btnText}>Quote</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        fontFamily: 'Lato-Black',
        marginVertical: 20,
        textTransform: 'uppercase',
        color: '#000',
    },
    btn: {
        backgroundColor: 'royalblue',
        padding: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    btnText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default Form;
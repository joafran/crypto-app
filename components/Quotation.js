import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Quotation = ({response}) => {
    if(Object.keys(response).length === 0) return null;
    return (
        <View style={styles.result}>
            <Text style={[styles.text, styles.price]}>
                <Text style={styles.span}>{response.PRICE}</Text>
            </Text>
            <Text style={styles.text}> Highest price of the day: {' '}
                <Text style={styles.span}>{response.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}> Lowest price of the day: {' '}
                <Text style={styles.span}>{response.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>  Variation last 24 hours: {' '}
                <Text style={styles.span}>{response.PRICE}</Text>
            </Text>
            <Text style={styles.text}>  Last Update: {' '}
                <Text style={styles.span}>{response.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 20,
    },
    text: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    span: {
        fontFamily: 'Lato-Black'
    },
    price: {
        fontSize: 38
    }
})

export default Quotation;
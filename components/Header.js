import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = () => {
    return (
        <Text style={styles.header}>
            Cryptocurrencies
        </Text>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        fontSize: 20,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        textAlign: 'center',
        paddingBottom: 20,
        textTransform: 'uppercase',
        color: '#FFF',
    }
})

export default Header;
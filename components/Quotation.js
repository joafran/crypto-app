import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Quotation = ({response}) => {
    if(Object.keys(response).length === 0) return null;
    return (
        <Text style={styles}>
           The quotation of the cryptocurrency is: {response.PRICE}
        </Text>
    );
};

const styles = StyleSheet.create({
})

export default Quotation;
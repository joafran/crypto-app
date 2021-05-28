import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from "react-native";
import Form from './components/Form';
import Header from './components/Header';
import Quotation from './components/Quotation';

const App =() => {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [ApiQuery, setApiQuery] = useState(false);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if(ApiQuery) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        const result = await axios.get(url);
        setLoading(true);
        
        setTimeout(() => {
          setResponse(result.data.DISPLAY[crypto][coin]);
          setApiQuery(false);
          setLoading(false);
        }, 3000);
      }
    }
    quoteCryptocurrency();
  }, [ApiQuery])

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          testID="image"
          style={styles.image} 
          source={require('./assets/cryptomonedas.png')}
        />
        <View style={styles.content}>
          <Form 
            coin={coin}
            crypto={crypto}
            setCoin={setCoin}
            setCrypto={setCrypto}
            setApiQuery={setApiQuery}
          />
        </View>
        <View>
          {loading ? <ActivityIndicator size="large" color="#00acee"/> : <Quotation response={response}/>}
        </View>
      </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  content: {
    marginHorizontal: '2.5%'
  }
});

export default App;

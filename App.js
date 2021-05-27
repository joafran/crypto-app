import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import Form from './components/Form';
import Header from './components/Header';

const App =() => {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [ApiQuery, setApiQuery] = useState(false);

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if(ApiQuery) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        const result = await axios.get(url);
        console.log(result.data.DISPLAY)
        setApiQuery(false);
      }
    }
    quoteCryptocurrency();
  }, [ApiQuery])

  return (
    <>
      <Header />
      <Image
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

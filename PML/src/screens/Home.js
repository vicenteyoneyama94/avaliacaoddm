// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Tela de inicio</Text>
      <Button
        title="Vá para detalhes"
        onPress={() => navigation.navigate('Detalhe')}
      />
    </View>
  );
};

export default Home;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InformacaoUser from './InformacaoUser';
import Header from './Cabeçalho';

const TeladePerfil = () => {
  return (
    <View style={styles.container}>
      <Header title="Perfil do Usuário"/>
      <InformacaoUser name="Vicente Yoneyama" email="vicenteyoneyama@gmail.com" age="29"/>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold'
  }
})
export default TeladePerfil;
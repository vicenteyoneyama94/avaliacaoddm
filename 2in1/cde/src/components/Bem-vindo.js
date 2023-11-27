import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Cabeçalho';

const BemVindo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Bem-vindo ao App"/>
      <Button
        title="Ir para o Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
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
      marginBottom: 20,
    },
  });

export default BemVindo;
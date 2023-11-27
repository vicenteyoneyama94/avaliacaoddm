import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacaoUser = ({ name, email, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Idade: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
  },
});

export default InformacaoUser;

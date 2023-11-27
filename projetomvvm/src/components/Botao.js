import React from 'react';
import { Button } from 'react-native';

const Botao = ({ onPress, title }) => (
  <Button title={title} onPress={onPress} />
);

export default Botao;

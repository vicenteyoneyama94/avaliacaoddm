import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import TarefasService from '../services/TarefasService';
import AdicionarTarefas from './AdicionarTarefas';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefas = TarefasService.getAllTarefa();
    setTarefas(tarefas);
  }, []);

  const adicionarTarefa = (novaTarefa) => {
    TarefasService.addTarefa(novaTarefa);
    setTarefas([...tarefas, novaTarefa]);
  }
  return (
    <View>
      <Text>Lista de Tarefas:</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(tarefa, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <AdicionarTarefas onAdicionarTarefa={adicionarTarefa} /> 
    </View>
  );
};

export default ListaTarefas;
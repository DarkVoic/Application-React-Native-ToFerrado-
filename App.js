import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import Tarefas from './componentes/Tarefas';
import Cabecalho from './componentes/Cabecalho';
import styles from './estilos';


export default function App() {
  const [tarefas, setTarefas] = useState([
    {id: 'task1', descricao: 'Declarar IRPF'},
    {id: 'task2', descricao: 'Estudar React Native'},
    {id: 'task3', descricao: 'Levar carro para revisão'},
  ]);

  const adicionaTarefa = (t) => {
    if(t.length > 0){
      const novaTarefa = {
        id: Math.random().toString(),
        descricao: t,
      }
      setTarefas([...tarefas, novaTarefa]);
    }
  }
  const alteraTarefa = (id,d) => {
    const i = tarefas.findIndex((t) => t.id === id);
    let novaLista = [...tarefas];
    novaLista[i].descricao = d;
    setTarefas(novaLista);
  }
  const apagaTarefa = (id) => setTarefas(tarefas.filter((t) => t.id !== id));
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.app}>
      <View style={styles.conteudo}>
        <Cabecalho pendentes={tarefas.length}/>
        <Tarefas tarefas={tarefas} 
                 onAdiciona={adicionaTarefa} 
                 onAltera={alteraTarefa} 
                 onApaga={apagaTarefa}/>
      </View>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}


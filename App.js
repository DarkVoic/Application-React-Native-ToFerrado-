import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, Platform, Alert, TouchableOpacity, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import Tarefas from './componentes/Tarefas';
import Cabecalho from './componentes/Cabecalho';
import Sobre from './componentes/Sobre';
import styles from './estilos';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import {NativeRouter, Route, Routes } from 'react-router-native';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [compativel, setCompativel] = useState(false);
  const [autenticavel, setAutenticavel] = useState(false);
  const [autenticado, setAutenticado] = useState(false);


  //Função assíncrona para armazenamento de dados locais
  async function armazenaDados(){
    try {
      await AsyncStorage.setItem('tarefas',JSON.stringify(tarefas));
    } catch (error) {
      Alert.alert("As tarefas não foram armazenadas");
    }
  }

  async function recuperaDados(){
     try {
      const t = await AsyncStorage.getItem('tarefas');
      if(t !== null){
        setTarefas(JSON.parse(t));
      }
    } catch (error) {
      Alert.alert("As tarefas não foram carregadas");
    }
  }

  async function verificaCompatibilidade(){
    const comp = await LocalAuthentication.hasHardwareAsync();
    if(comp)
      setCompativel(true);
    const aut = await LocalAuthentication.isEnrolledAsync();
    if(aut)
      setAutenticavel(true);
  }

  const autenticar = async () => {
    let auted = await LocalAuthentication.authenticateAsync(
    {promptMessage: "Autorização"}
    );
    if(auted.success)
      setAutenticado(true);
  }

  useEffect(() => {
    recuperaDados();
    verificaCompatibilidade();
  }, []);

  useEffect(() => {
    armazenaDados();
  }, [tarefas]);

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
  
  return !compativel || !autenticavel || autenticado ?(
    <NativeRouter>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.app}>
        <View style={styles.conteudo}>
          <Cabecalho pendentes={tarefas.length}/>
          <Routes>
            <Route path='/' 
              element={
                <Tarefas tarefas={tarefas} 
                    onAdiciona={adicionaTarefa} 
                    onAltera={alteraTarefa} 
                    onApaga={apagaTarefa}/>
            }/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
        </View>
        <StatusBar style="dark" />
      </KeyboardAvoidingView>
    </NativeRouter>
    ) : (
       <View style={styles.login}>
      <Text style={styles.loginTitulo}>Tô Ferrado 1.0</Text>
      <TouchableOpacity onPress={autenticar}>
        <View style={styles.loginBotao}>
          <Text style={styles.loginBotaoTexto}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
    )

}
  



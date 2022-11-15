import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';
import styles from '../estilos';
import Tarefa from './Tarefa';

export default function Tarefas(props){

    const [campo, setCampo] = useState('');
    
    const adiciona = () =>  {
        props.onAdiciona(campo);
        setCampo('');
        _input.blur
    }
    return(
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Minhas tarefas</Text>
            </View>
            <View style={styles.componentContent}>
                <FlatList style={styles.list}
                    data={props.tarefas}
                    renderItem={({item}) => (
                         <Tarefa 
                            id={item.id}   
                            descricao={item.descricao}
                            onAltera={props.onAltera}
                            onApaga={props.onApaga}
                        />  
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={()=>(
                        <View style={styles.liSeparator}/>
                    )}
                />
            </View>
            <View style={[styles.field, styles.mt2]}>
                <TextInput style={styles.input}
                    placeholder='Nova tarefa'
                    defaultValue={campo}
                    onChangeText={(c)=>setCampo(c)}
                    onSubmitEditing={adiciona}
                    onBlur={Keyboard.dismiss}
                    ref={(r) =>(_input = r)}
                />
                <TouchableOpacity onPress={adiciona}>
                    <View style={[styles.button, styles.primary]}>
                        <Image
                            source={require("../assets/plus0.png")}
                            style={styles.buttonImg}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

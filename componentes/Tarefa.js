import React from 'react';
import { useState } from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../estilos';

export default function Tarefa(props){
    const [campo, setCampo] = useState(props.descricao);
    const [altera, setAltera] = useState(false);

    const confirma = () => {
        props.onAltera(props.id, campo);
        setAltera(false);
    };
    
    return altera ? (
            <View style={styles.li}>
                <TextInput
                    style={styles.input}
                    defaultValue={props.descricao}
                    onChangeText={(c)=>setCampo(c)}
                    onSubmitEditing={confirma}
                    onBlur={confirma} autoFocus />
            </View>
        ) : (
            <View style={styles.li}>
                <Text style={styles.liText}>{props.descricao}</Text>
                <TouchableOpacity onPress={() => setAltera(true)}>
                    <View style={[styles.button, styles.primary]}>
                        <Image source={require('../assets/edit.png')} style={styles.buttonImg}></Image>
                    </View>      
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onApaga(props.id)}>
                    <View style={[styles.button, styles.danger]}>
                        <Image source={require('../assets/delete.png')} style={styles.buttonImg}></Image>
                    </View>
                </TouchableOpacity>
            </View>
    )
} 
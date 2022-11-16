import React from 'react';
import { View, Text } from 'react-native';
import styles from '../estilos';
import {Link} from 'react-router-native';

export default function Sobre(){

    return(
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Sobre...</Text>
            </View>
            <View style={[styles.componentContent, {}]}>
                <Text style={[styles.h2, styles.mt2]}>Tô Ferrado</Text>
                <Text style={[styles.h3, styles.mt1]}>Versão React Native</Text>
                <Text style={[styles.mt2, {fontSize: 16}]}>
                    Aplicação exemplo desenvolvida para a disciplina 
                    Tópicos Especiais de Sistemas de Informação da PUC Minas.
                </Text>
                <Text>Autor: Matheus Santos - PUC Minas</Text>
                <Link to='/' style={styles.mt4}>
                    <View style={[styles.primary, {alignItems:'center',borderWidth: 1, borderRadius: 15}]}>
                        <Text style={{ padding: 20, fontSize: 20, color: 'White'}}>Voltar</Text>
                    </View>
                </Link>
            </View>
        </View>
        );
}
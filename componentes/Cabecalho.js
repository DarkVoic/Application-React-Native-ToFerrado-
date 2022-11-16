import React from 'react';
import { View, Text } from 'react-native';
import styles from '../estilos';
import {Link} from 'react-router-native';

export default function Cabecalho({pendentes}){

    return(
        <View style={[styles.headerBar, styles.dark]}>
            <Link to='/sobre'>
                <Text  style={styles.appName}>Tô Ferrado</Text>
            </Link>
            <Text style={[styles.badge, styles.warning]}>{pendentes}</Text>
        </View>
        );
}
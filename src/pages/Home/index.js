import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Action from '../../components/Action';
import Header from '../../components/Header';
import Balance from '../../components/Header/Balance';
import Movements from '../../components/Movements';


const list = [
    {
        id: 1,
        label: 'Boleto conta de luz',
        value: '300,90',
        date: '17/08/2022',
        type: 0 //despesas
    },

    {
        id: 2,
        label: 'Pix cliente x',
        value: '4.300,90',
        date: '18/08/2022',
        type: 1 //receita
    },

    {
        id: 3,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    },
    {
        id: 4,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    },
    {
        id: 5,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    },
    {
        id: 6,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    },
    {
        id: 7,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    },
    {
        id: 8,
        label: 'Aluguel',
        value: '2.300,90',
        date: '19/08/2022',
        type: 0 //despesas
    }
]

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Header name="Matheus Bonnet" />

            <Balance saldo="9.250,90" gastos="900,56" />

            <Action/>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
})
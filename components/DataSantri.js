import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../config';
import { ref, onValue } from 'firebase/database';

const DataSantri = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const santriRef = ref(db, 'Data Santri/');
            onValue(santriRef, (snapshot) => {
                const dataArr = [];
                snapshot.forEach((childSnapshot) => {
                    dataArr.push(childSnapshot.val());
                });
                setData(dataArr);
            });
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Data dari Firebase:</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idYayasan.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>ID Yayasan:</Text>
                            <Text>{item.idYayasan}</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.label}>Nama Santri:</Text>
                            <Text>{item.namaSantri}</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.label}>Kamar:</Text>
                            <Text>{item.kamar}</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.label}>Nama Wali:</Text>
                            <Text>{item.namaWali}</Text>
                        </View>

                        <View style={styles.separator} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    row: {
        marginBottom: 10,
    },
    column: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        paddingRight: 5,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default DataSantri;

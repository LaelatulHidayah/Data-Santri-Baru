import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { db } from '../config';
import { ref, set } from 'firebase/database';

const addData = () => {
    const [idYayasan, setIdYayasan] = useState('');
    const [namaSantri, setNamaSantri] = useState('');
    const [kamar, setKamar] = useState(''); // Corrected from setAsrama to setKamar
    const [namaWali, setNamaWali] = useState('');

    // Menambah data ke firebase realtime db
    const dataAddOn = () => {
        const santriRef = ref(db, 'Data Santri/' + idYayasan); // Update the reference path
        set(santriRef, {
            idYayasan: idYayasan,
            namaSantri: namaSantri,
            kamar: kamar,
            namaWali: namaWali,
        });
        setIdYayasan('');
        setNamaSantri('');
        setKamar('');
        setNamaWali('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='ID Yayasan'
                value={idYayasan}
                onChangeText={(text) => setIdYayasan(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Nama Santri'
                value={namaSantri}
                onChangeText={(text) => setNamaSantri(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Kamar'
                value={kamar}
                onChangeText={(text) => setKamar(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Nama Wali'
                value={namaWali}
                onChangeText={(text) => setNamaWali(text)}
                style={styles.input}
            />
            <Button
                title='TAMBAH'
                onPress={dataAddOn}
            />
        </View>
    );
};

export default addData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 50,
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 5,  // Adjust vertical margin
        padding: 8,  // Adjust padding
        fontSize: 12,
        borderRadius: 6,
    },
});
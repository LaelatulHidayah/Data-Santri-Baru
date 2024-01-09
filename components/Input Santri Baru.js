import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const InputSantriBaru = () => {
  const [idYayasan, setIdYayasan] = useState('');
  const [namaSantri, setNamaSantri] = useState('');
  const [asrama, setAsrama] = useState('');
  const [namaWali, setNamaWali] = useState('');

  const handleSubmit = () => {
    // Proses pengiriman data atau validasi dapat ditambahkan di sini
    console.log('Data yang diisi:', { idYayasan, namaSantri, asrama, namaWali });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>ID Yayasan:</Text>
        <TextInput
          style={styles.input}
          value={idYayasan}
          onChangeText={(text) => setIdYayasan(text)}
        />

        <Text>Nama Santri:</Text>
        <TextInput
          style={styles.input}
          value={namaSantri}
          onChangeText={(text) => setNamaSantri(text)}
        />

        <Text>Asrama:</Text>
        <TextInput
          style={styles.input}
          value={asrama}
          onChangeText={(text) => setAsrama(text)}
        />

        <Text>Nama Wali:</Text>
        <TextInput
          style={styles.input}
          value={namaWali}
          onChangeText={(text) => setNamaWali(text)}
        />

        <Button title="Tambah Data" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputSantriBaru;

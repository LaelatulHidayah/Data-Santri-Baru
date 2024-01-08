import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InputSantriBaru = () => {
  const [idYayasan, setIdYayasan] = useState('');
  const [namaSantri, setNamaSantri] = useState('');
  const [asrama, setAsrama] = useState('');

  const handleSubmit = () => {
    // Proses pengiriman data atau validasi dapat ditambahkan di sini
    console.log('Data yang diisi:', { idYayasan, namaSantri, asrama });
  };

  return (
    <View style={styles.container}>
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

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputSantriBaru

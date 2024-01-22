import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { db } from '../config';
import { ref, onValue, update, remove } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';

const DataSantri = () => {
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({
        id: '',
        idYayasan: '',
        namaSantri: '',
        kamar: '',
        namaWali: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const santriRef = ref(db, 'Data Santri/');
            onValue(santriRef, (snapshot) => {
                const dataArr = [];
                snapshot.forEach((childSnapshot) => {
                    dataArr.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setData(dataArr);
            });
        };

        fetchData();
    }, []);

    const toggleEditMode = (item) => {
        setEditMode(!editMode);
        setEditData({
            id: item.id,
            idYayasan: item.idYayasan,
            namaSantri: item.namaSantri,
            kamar: item.kamar,
            namaWali: item.namaWali,
        });
    };

    const saveEdit = () => {
        const santriRef = ref(db, 'Data Santri/' + editData.id);
        update(santriRef, {
            idYayasan: editData.idYayasan,
            namaSantri: editData.namaSantri,
            kamar: editData.kamar,
            namaWali: editData.namaWali,
        });
        setEditMode(false);
    };

    const deleteData = (id) => {
        const santriRef = ref(db, 'Data Santri/' + id);
        remove(santriRef);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Data dari Firebase:</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => (item && item.idYayasan ? item.idYayasan.toString() : '')}
                renderItem={({ item }) => (
                    <View style={[styles.row, { backgroundColor: 'white', elevation: 5, shadowColor: 'black', shadowOpacity: 0.2, shadowRadius: 5, shadowOffset: { width: 0, height: 4 }}]}>
                        <View style={styles.dataContainer}>
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
                        </View>

                        <View style={styles.actionsContainer}>
                            <TouchableOpacity style={styles.editButton} onPress={() => toggleEditMode(item)}>
                                <View style={styles.buttonContent}>
                                    <Ionicons name="create" size={20} color="white" style={styles.icon} />
                                    <Text style={styles.buttonText}>Edit</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteData(item.id)}>
                                <View style={styles.buttonContent}>
                                    <Ionicons name="trash-outline" size={20} color="white" style={styles.icon} />
                                    <Text style={styles.buttonText}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {editMode && editData.id === item.id ? (
                            // Formulir edit
                            <View style={styles.editForm}>
                                <TextInput
                                    placeholder="ID Yayasan"
                                    value={editData.idYayasan}
                                    onChangeText={(text) => setEditData({ ...editData, idYayasan: text })}
                                />
                                <TextInput
                                    placeholder="Nama Santri"
                                    value={editData.namaSantri}
                                    onChangeText={(text) => setEditData({ ...editData, namaSantri: text })}
                                />
                                <TextInput
                                    placeholder="Kamar"
                                    value={editData.kamar}
                                    onChangeText={(text) => setEditData({ ...editData, kamar: text })}
                                />
                                <TextInput
                                    placeholder="Nama Wali"
                                    value={editData.namaWali}
                                    onChangeText={(text) => setEditData({ ...editData, namaWali: text })}
                                />
                                <Button title="Simpan" onPress={saveEdit} />
                            </View>
                        ) : null}

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10, // Tambahkan padding ke setiap baris data
        borderRadius: 5, // Tambahkan border radius untuk sudut yang lebih lembut
    },
    dataContainer: {
        flex: 1,
    },
    actionsContainer: {
        flexDirection: 'row',
    },
    editButton: {
        marginRight: 10,
        backgroundColor: '#66CDAA',
        padding: 5,
        borderRadius: 15,
        height: 30,
    },
    deleteButton: {
        backgroundColor: 'lightcoral',
        padding: 5,
        borderRadius: 15,
        height: 30,
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
        height: 10,
        backgroundColor: '#000',
        marginTop: 10,
        marginBottom: 10,
    },
    editForm: {
        marginTop: 10,
    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 5,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
    },
});

export default DataSantri;

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { db } from '../config';
import { ref, set } from 'firebase/database';

const addData = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Menambah data ke firebase realtime db
    const dataAddOn = () => {
        set(ref(db, 'posts/newPosts/' + title), {
            title: title,
            body: body,
        });
        setTitle('');
        setBody('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Body'
                value={body}
                onChangeText={(text) => setBody(text)}
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
        backgroundColor: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        margin: 10,
        padding: 10,
        fontSize: 12,
        borderRadius: 6
    },
});

// Home.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Tampilkan slide gambar di atas teks profil */}
                <ScrollView horizontal contentContainerStyle={styles.gambarContainer}>
                    <Image
                        source={require('/assets/1.jpg')}
                        style={styles.gambar}
                    />
                    <Image
                        source={require('/assets/2,.jpg')}
                        style={styles.gambar}
                    />
                    <Image
                        source={require('/assets/3.jpg')}
                        style={styles.gambar}
                    />
                    <Image
                        source={require('/assets/4.jpg')}
                        style={styles.gambar}
                    />
                </ScrollView>

                {/* Tampilkan cerita profil asrama */}
                <View style={styles.ceritaContainer}>
                    <Text style={styles.judul}>Profil Asrama I</Text>
                    <Text>
                        Asrama I adalah salah satu asrama santri yang berada di naungan yayasan Darut Taqwa Sengonagung Purwosari Pasuruan
                        dirikan pada tanggal 18 Juni 2011, kini asrama I sudah berdiri selama 13 tahun lamanya.
                        Asrama I diperuntukkan santri putri yang sedang melaksanakan pendidikan di perguruan tinggi Universitas Yudharta,
                        Pembina Asrama I adalah H. Agus Muhammada, M. Pd & Ning Siti Khurotin, M. Pd.
                    </Text>

                    <Text>
                        Asrama I difasilitasi banyak penunjang pesantren, seperti Kamar Tidur, Mushola, Kamar Mandi, jemuran, halaman, dan masih banyak lagi.
                        Jumlah santri Asrama I kini mencapai 214 Santri. Tidak hanya berisi santri yang  mengenyam pendidikan perguruan tinggi, tidak sedikit pula santri Asrama I, yang sekedarmelanjutkan kepesantrenannya,
                        atau yang biasa dikenal dengan salaf.
                        Kepengurusan di Asrama I diketuai oleh Rizqy Sabila S.T beserta 18 pengurus lainnya.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    gambarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    gambar: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 10,
    },
    ceritaContainer: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20,
    },
    judul: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Home;

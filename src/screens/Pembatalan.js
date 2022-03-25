import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

var iconHeight = 26;
var iconWidth = 26;

function Pembatalan({ navigation }) {
    const route = useRoute()

    // Parameter ditransfer
    const [lokasi, setLokasi] = useState('');
    const [target, setTarget] = useState('');
    const [jenis, setJenis] = useState('');
    const [planTanggal, setPlantanggal] = useState('');
    const [planWaktu, setPlanwaktu] = useState('');
    const [banyak, setBanyak] = useState('');

    const store = () => {
        navigation.navigate('Pesanan', {
            lokasi: lokasi,
            target: target,
            jenis: jenis,
            planTanggal: planTanggal,
            planWaktu: planWaktu,
            banyak: banyak,
            
        })
    }

    const tampilkan = (start, end, kelas, tgl, mulai, usia, jmlh) => {
        if ((start == '') || (end == '') || (kelas == '') || (tgl == '') || (mulai == '') || (usia == '') || (jmlh == '')) {
            return <View>
                <Text style={{ margin: 8, fontSize: 14, textAlign: 'center', fontStyle: 'italic' }}>Maaf, tapi Anda belum memiliki tiket yang dibatalkan</Text>
            </View>
        }
        else {
            return <View style={{ flex: 1, marginBottom: 290 }}>
                <View style={{ height: '80%', borderColor: '#7a7a7a', borderWidth: 1, backgroundColor: '#E9E9E9', borderRadius: 10, marginTop: 5, marginBottom: 5, width: '100%', flex: 1, padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="map-placeholder" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.titikAwal}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Menuju</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="location-arrow" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.titikAkhir}</Text>
                    </View>
                    <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Layanan</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{route.params.jenisLayanan}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jadwal</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.jadwalBerangkat}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Waktu</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.jadwalJam}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Kategori</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.kategoriTiket}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jumlah tersedia</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{route.params.jumlahTiket}</Text>
                    </View>
                    <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Harga/tiket</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Belum tersedia</Text>
                    </View>
                </View>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={{ margin: 8, fontSize: 14, textAlign: 'center' }}>Tiket pesanan Anda yang dibatalkan akan terlihat di sini</Text>
                {tampilkan(route.params.titikAwal, route.params.titikAkhir, route.params.jenisLayanan, route.params.jadwalBerangkat, route.params.jadwalJam, route.params.kategoriTiket, route.params.jumlahTiket)}
            </View>



            {/* Nav Bar */}
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate('Home')} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
                        <Text style={styles.NavText}>Beranda</Text>
                    </Pressable>

                    <Pressable onPress={store} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="add-comment-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
                        <Text style={styles.NavText}>Pesanan</Text>
                    </Pressable>

                    <Pressable style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="rounded-info-button" height={iconHeight} width={iconWidth} color='#8a8a8a' />
                        <Text style={styles.NavText}>Pembatalan</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Lainnya')} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="menu-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
                        <Text style={styles.NavText}>Lainnya</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 5,
    },

    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#2c3038',
        width: '95%',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    },

    IconBehave: {
        padding: 14,
    },

    NavText: {
        color: '#FFFFFF',
    },

    NavTextActive: {
        color: '#8a8a8a',
    },


    NavButtonContainer: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 3,
    }
});

export default Pembatalan
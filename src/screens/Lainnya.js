import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

var iconHeight = 26;
var iconWidth = 26;

function Lainnya({ navigation }) {
    // Parameter ditransfer
    const [lokasi, setLokasi] = useState('');
    const [target, setTarget] = useState('');
    const [jenis, setJenis] = useState('');
    const [planTanggal, setPlantanggal] = useState('');
    const [planWaktu, setPlanwaktu] = useState('');
    const [kategori,setKategori] = useState('');
    const [banyak, setBanyak] = useState('');

    const store = () => {
        navigation.navigate('Pesanan', {
            lokasi: lokasi,
            target: target,
            jenis: jenis,
            planTanggal: planTanggal,
            planWaktu: planWaktu,
            kategori: kategori,
            banyak: banyak,
        })
    }

    const [titikAwal, settitikAwal] = useState('');
    const [titikAkhir, settitikAkhir] = useState('');
    const [jenisLayanan, setjenisLayanan] = useState('')
    const [jadwalBerangkat, setjadwalBerangkat] = useState('');
    const [jadwalJam, setjadwalJam] = useState('');
    const [kategoriTiket, setkategoriTiket] = useState('');
    const [jumlahTiket, setjumlahTiket] = useState('')

    const batal = () => {
        navigation.navigate('Pembatalan', {
            titikAwal: titikAwal,
            titikAkhir: titikAkhir,
            jenisLayanan: jenisLayanan,
            jadwalBerangkat: jadwalBerangkat,
            jadwalJam: jadwalJam,
            kategoriTiket: kategoriTiket,
            jumlahTiket: jumlahTiket,
        })
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', width: '90%', height: '77.5%', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ borderRadius: 100, borderColor: '#ababab', borderWidth: 3, padding: 20, width: '28%' }}>
                        <Icon name="user-outline" height={iconHeight + 30} width={iconWidth + 30} color='#ababab' />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, marginTop: 5 }}>User 123</Text>
                </View>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
                <Text>User : test123@mail.com</Text>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="user-shape" height={iconHeight} width={iconWidth} color='#cfb525' />
                    <Text style={{marginLeft: 5, fontSize: 16}}>Status : Gold Member</Text>
                </View>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="notifications-button" height={iconHeight} width={iconWidth} color='#6978ff' />
                    <Text style={{marginLeft: 5, fontSize: 16}}>Notifikasi</Text>
                </View>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="thumb-up-button" height={iconHeight} width={iconWidth} color='#6978ff' />
                    <Text style={{marginLeft: 5, fontSize: 16}}>Rating kami?</Text>
                </View>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="help-button-speech-bubble-with-questiom-mark" height={iconHeight} width={iconWidth} color='#6978ff' />
                    <Text style={{marginLeft: 5, fontSize: 16}}>Bantuan</Text>
                </View>
                <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>
            </View>

            {/* Bar Navigasi */}
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

                    <Pressable onPress={batal} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="rounded-info-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
                        <Text style={styles.NavText}>Pembatalan</Text>
                    </Pressable>

                    <Pressable style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="menu-button" height={iconHeight} width={iconWidth} color='#8a8a8a' />
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

export default Lainnya
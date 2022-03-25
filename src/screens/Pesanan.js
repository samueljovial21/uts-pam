import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import TiketTersedia from '../TiketTersedia/TiketTersedia.json';
import { useRoute } from '@react-navigation/native';

var iconHeight = 26;
var iconWidth = 26;

function Pesanan({ navigation }) {
    const route = useRoute();

    // Scrolling Function
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const [titikAwal, settitikAwal] = useState(route.params.lokasi);
    const [titikAkhir, settitikAkhir] = useState(route.params.target);
    const [jenisLayanan, setjenisLayanan] = useState(route.params.jenis)
    const [jadwalBerangkat, setjadwalBerangkat] = useState(route.params.planTanggal);
    const [jadwalJam, setjadwalJam] = useState(route.params.planWaktu);
    const [kategoriTiket, setkategoriTiket] = useState(route.params.kategori);
    const [jumlahTiket, setjumlahTiket] = useState(route.params.banyak)

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

    const batalKosong = () => {
        navigation.navigate('Pembatalan', {
            titikAwal: '',
            titikAkhir: '',
            jenisLayanan: '',
            jadwalBerangkat: '',
            jadwalJam: '',
            kategoriTiket: '',
            jumlahTiket: '',
        })
    }


    const show = (parameter_lokasi, parameter_target, parameter_layanan, parameter_tanggal, parameter_waktu, parameter_kategori, parameter_banyak) => {
        if ((parameter_lokasi == '') || (parameter_target == '') || (parameter_layanan == '') || (parameter_tanggal == '') || (parameter_waktu == '') || (parameter_kategori == '') || (parameter_banyak == '')) {
            return <View>
                <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>Maaf, Anda belum memesan tiket manapun</Text>
            </View>
        }
        else {
            return <View>
                <View style={{ borderColor: '#7a7a7a', borderWidth: 1, backgroundColor: '#E9E9E9', borderRadius: 10, marginTop: 5, marginBottom: 5, flex: 1, padding: 10, marginBottom: 10 }}>
                    <Text style={{ fontStyle: 'italic', textAlign: 'right' }}>Tiket Anda mungkin belum tersedia,</Text>
                    <Text style={{ fontStyle: 'italic', textAlign: 'right' }}>namun akan segera kami proses</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="map-placeholder" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.lokasi}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Menuju</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="location-arrow" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                        <Text style={{ fontSize: 15, paddingBottom: 5 }}>{route.params.target}</Text>
                    </View>
                    <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Layanan</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{route.params.jenis}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jadwal</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.planTanggal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Waktu</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.planWaktu}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Kategori</Text>
                        <Text style={{ fontSize: 15 }}>{route.params.kategori}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jumlah tersedia</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{route.params.banyak}</Text>
                    </View>
                    <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Harga/tiket</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Belum diketahui</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 5, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', width: '28%', backgroundColor: '#ff5454', borderRadius: 8, borderWidth: 1, borderColor: '#ff0000' }}
                        onPress={batal}>
                        <Icon name="round-info-button" height={iconHeight - 8} width={iconWidth - 8} color='white' margin={5} />
                        <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' }}>Batalkan?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    };

    return (
        <View style={styles.container}>

            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                    }
                }}
                scrollEventThrottle={400}
                style={{ flex: 1, width: '90%', marginBottom: 65 }}
            >
                <View>
                    <Text style={{ margin: 8, fontSize: 14, textAlign: 'center' }}>Tiket pesanan Anda akan terlihat di sini</Text>
                    <View>
                        {show(route.params.lokasi, route.params.target, route.params.jenis, route.params.planTanggal, route.params.planWaktu, route.params.kategori, route.params.banyak)}
                    </View>
                    <View style={{ backgroundColor: '#2c3038', width: '100%', height: '0.2%', borderRadius: 20 }}></View>

                    <Text style={{ margin: 8, fontSize: 14, textAlign: 'center' }}>Tiket yang tersedia saat ini</Text>
                    <View>
                        {
                            TiketTersedia && TiketTersedia.map(tiketTersedia => {
                                return (
                                    <View style={{ borderColor: '#7a7a7a', borderWidth: 1, backgroundColor: '#E9E9E9', borderRadius: 10, marginTop: 5, marginBottom: 5, width: '100%', flex: 1, padding: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pelabuhan</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="map-placeholder" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                                            <Text style={{ fontSize: 15, paddingBottom: 5 }}>{tiketTersedia.awal}</Text>
                                        </View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Menuju</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="location-arrow" height={iconHeight - 8} width={iconWidth - 8} color='#2c3038' />
                                            <Text style={{ fontSize: 15, paddingBottom: 5 }}>{tiketTersedia.akhir}</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Layanan</Text>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{tiketTersedia.layanan}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jadwal</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.tanggal}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Waktu</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.waktu}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Kategori</Text>
                                            <Text style={{ fontSize: 15 }}>{tiketTersedia.kategori}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jumlah tersedia</Text>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{tiketTersedia.jumlah}</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#2c3038', width: '100%', height: '1%', borderRadius: 20, marginTop: 5, marginBottom: 5, }}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Harga/tiket</Text>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Rp {tiketTersedia.harga},00</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>



            {/* Papan navigasi di bawah */}
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate('Home')} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
                        <Text style={styles.NavText}>Beranda</Text>
                    </Pressable>

                    <Pressable style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="add-comment-button" height={iconHeight} width={iconWidth} color='#8a8a8a' />
                        <Text style={styles.NavText}>Pesanan</Text>
                    </Pressable>

                    <Pressable onPress={batalKosong} style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="rounded-info-button" height={iconHeight} width={iconWidth} color='#FFFFFF' />
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

    // Bagian atas
    kotak: {
        width: '80%',
        height: '13%',
        backgroundColor: 'white',
        elevation: 50,
        padding: 10,
    },

    kontenAtas: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    // Papan Navigasi
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

export default Pesanan
import Icon from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ModalPickerAwal } from '../../components/ModalPickerAwal';
import { ModalPickerAkhir } from '../../components/ModalPickerAkhir';
import { Layanan } from '../../components/Layanan';
import { Tipe } from '../../components/Tipe';

var iconHeight = 26;
var iconWidth = 26;

function HomeScreen({ navigation }) {

    // Pelabuhan Awal
    const [chooseData, setchooseData] = useState('Pilih pelabuhan berangkat');
    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
        setLokasi(option)
    }

    // Pelabuhan Akhir
    const [chooseData2, setchooseData2] = useState('Pilih pelabuhan tujuan');
    const [isModalVisible2, setisModalVisible2] = useState(false);

    const changeModalVisibility2 = (bool) => {
        setisModalVisible2(bool)
    }

    const setData2 = (option) => {
        setchooseData2(option)
        setTarget(option)
    }

    // Layanan
    const [chooseData3, setchooseData3] = useState('Pilih kelas layanan');
    const [isModalVisible3, setisModalVisible3] = useState(false);

    const changeModalVisibility3 = (bool) => {
        setisModalVisible3(bool)
    }

    const setData3 = (option) => {
        setchooseData3(option)
        setJenis(option)
    }

    // Tipe Penumpang
    const [chooseData4, setchooseData4] = useState('Pilih kategori');
    const [isModalVisible4, setisModalVisible4] = useState(false);

    const changeModalVisibility4 = (bool) => {
        setisModalVisible4(bool)
    }

    const setData4 = (option) => {
        setchooseData4(option)
        setKategori(option)
    }


    // Parameter ditransfer
    const [lokasi,setLokasi] = useState('');
    const [target,setTarget] = useState('');
    const [jenis,setJenis] = useState('');
    const [planTanggal,setPlantanggal] = useState('');
    const [planWaktu,setPlanwaktu] = useState('');
    const [kategori,setKategori] = useState('');
    const [banyak,setBanyak] = useState('');

    const store = () => {
        navigation.navigate('Pesanan', {
            lokasi: lokasi,
            target : target,
            jenis : jenis,
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
            {/* Form */}
            <View style={styles.FormBox}>
                {/* Jududl */}
                <Text style={styles.judulText}>Kapalzy</Text>



                {/* Opsi Pelabuhan Awal */}
                <Text style={styles.textOption}>Pelabuhan Awal</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="map-placeholder" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeModalVisibility(true)}
                    >
                        <Text style={styles.textTouch} onChangeText={(text)=>setLokasi(text)}>{chooseData}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        nRequestClose={() => changeModalVisibility(false)}
                    >
                        <ModalPickerAwal
                            changeModalVisibility={changeModalVisibility}
                            setData={setData}
                        />
                    </Modal>
                </View>



                {/* Opsi Pelabuhan Akhir */}
                <Text style={styles.textOption}>Pelabuhan Akhir</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="location-arrow" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeModalVisibility2(true)}
                    >
                        <Text style={styles.textTouch}>{chooseData2}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible2}
                        nRequestClose={() => changeModalVisibility2(false)}
                    >
                        <ModalPickerAkhir
                            changeModalVisibility2={changeModalVisibility2}
                            setData={setData2}
                        />
                    </Modal>
                </View>



                {/* Opsi Layanan */}
                <Text style={styles.textOption}>Layanan</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="user-shape" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TouchableOpacity
                        style={styles.touchInputForm}
                        onPress={() => changeModalVisibility3(true)}
                    >
                        <Text style={styles.textTouch}>{chooseData3}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible3}
                        nRequestClose={() => changeModalVisibility3(false)}
                    >
                        <Layanan
                            changeModalVisibility3={changeModalVisibility3}
                            setData={setData3}
                        />
                    </Modal>
                </View>



                {/* Opsi Tanggal */}
                <Text style={styles.textOption}>Tanggal</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="power-connection-indicator" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TextInput placeholder='hh/bb/tttt'
                        style={styles.inputTanggal}
                        onChangeText={(text)=> setPlantanggal(text)}
                    ></TextInput>
                </View>




                {/* Opsi Waktu */}
                <Text style={styles.textOption}>Waktu</Text>
                <View style={styles.pelabuhan}>
                    <Icon name="schedule-button" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TextInput placeholder='Cth : 19:00 (24 jam)'
                        style={styles.inputWaktu}
                        onChangeText={(text)=> setPlanwaktu(text)}
                    ></TextInput>
                </View>




                {/* Opsi Kategori */}
                <View style={styles.pelabuhanBawah}>
                    <Icon name="user-shape" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />

                    <TouchableOpacity
                        style={styles.touchInputFormBawah}
                        onPress={() => changeModalVisibility4(true)}
                    >
                        <Text style={styles.textTouch}>{chooseData4}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible4}
                        nRequestClose={() => changeModalVisibility4(false)}
                    >
                        <Tipe
                            changeModalVisibility4={changeModalVisibility4}
                            setData={setData4}
                        />
                    </Modal>




                    {/* Opsi Jumlah */}
                    <Icon name="users-social-symbol" height={iconHeight + 11} width={iconWidth + 11} color='#2c3038' />
                    <TextInput placeholder='Jumlah'
                        style={styles.inputJumlah}
                        onChangeText={(text)=> setBanyak(text)}
                    ></TextInput>
                </View>


                {/* Button */}
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                    style={styles.pesanTouch}
                    onPress={store}
                    >
                        <Text style={styles.pesanButtonText}>Pesan</Text>
                    </TouchableOpacity>
                </View>
            </View>




            {/* Navigasi Bar */}
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable style={styles.IconBehave}
                        android_ripple={{ borderless: true, radius: 50 }}
                        style={styles.NavButtonContainer}>
                        <Icon name="home-button" height={iconHeight} width={iconWidth} color='#8a8a8a' />
                        <Text style={styles.NavTextActive}>Beranda</Text>
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
    inputJumlah: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '20%',
        marginLeft: 10,
        paddingLeft: 10,
        fontSize: 15,
    },

    inputWaktu: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '80%',
        marginLeft: 6,
        paddingLeft: 10,
        fontSize: 15,
    },

    inputTanggal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '80%',
        marginLeft: 6,
        paddingLeft: 10,
        fontSize: 15,
    },

    btnContainer: {
        justifyContent: 'center',
        margin: 10,
    },

    pesanTouch: {
        backgroundColor: '#ff861c',
        borderRadius: 6,
        width: '40%',
    },

    pesanButtonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        margin: 8,
    },

    textOption: {
        fontSize: 16,
        paddingTop: 4,
        fontWeight: 'bold',
    },

    pelabuhan: {
        flexDirection: 'row',
        paddingTop: 1,
    },

    pelabuhanBawah: {
        flexDirection: 'row',
        paddingTop: 25,
    },

    textTouch: {
        fontSize: 15,
        color: '#8c8c8c',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 5,
    },

    touchInputForm: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '80%',
        marginLeft: 5,
    },

    touchInputFormBawah: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '43%',
        marginLeft: 5,
        marginRight: 15,
    },


    judulText: {
        alignItems: 'center',
        color: '#3370ff',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 8,
    },

    FormBox: {
        position: 'absolute',
        width: '90%',
        height: '87%',
        backgroundColor: '#ffffff',
        top: 10,
        borderRadius: 10,
        elevation: 100,
        alignItems: 'center',
    },

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

export default HomeScreen
import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, ScrollView
} from 'react-native';

const OPTIONS = ['Ekonomi', 'Bisnis', 'Kelas Pertama'];

const Layanan = (props) => {
    const onPressItem3 = (option) => {
        props.changeModalVisibility3(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={()=> onPressItem3(item)}
            >
                <Text style={styles.textOption}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeModalVisibility3(false)}
        style={styles.container}
        >
            <View style={[styles.modal, {width: '85%'}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textOption: {
        margin: 10,
        marginLeft: 15,
        fontSize: 15,
    },

    option: {
        alignItems: 'flex-start',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
})

export {Layanan}
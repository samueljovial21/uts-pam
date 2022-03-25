import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, ScrollView
} from 'react-native';

const OPTIONS = ['Dewasa', 'Anak-anak'];

const Tipe = (props) => {
    const onPressItem4 = (option) => {
        props.changeModalVisibility4(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={()=> onPressItem4(item)}
            >
                <Text style={styles.textOption}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeModalVisibility4(false)}
        style={styles.container}
        >
            <View style={[styles.modal, {width: '85%', height: '13%'}]}>
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

export {Tipe}
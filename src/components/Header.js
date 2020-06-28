import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        backgroundColor: '#9ad',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
})

export default Header

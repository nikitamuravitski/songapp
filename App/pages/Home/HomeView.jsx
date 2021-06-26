import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ideas } from '../Ideas'
import { Projects } from '../Projects'
export const HomeView = () => {
    return (
        <View style={styles.container}>
            <Projects recent />
            <Ideas recent />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
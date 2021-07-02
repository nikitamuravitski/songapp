import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Ideas } from '../Ideas'
import { Projects } from '../Projects'
export const HomeView = () => {
    return (
        <ScrollView style={styles.container}>
            <Projects recent />
            <Ideas recent />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
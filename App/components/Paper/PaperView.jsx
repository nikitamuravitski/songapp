import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
export const PaperView = (props) => {
    let {
        uuid,
        content,
        name,
        onPressHandler
    } = props
    return (
        <TouchableOpacity onPress={() => onPressHandler({ name, uuid })} style={styles.container}>
            <View>
                <View style={styles.name}>
                    {name && <Text>{name}</Text>}
                </View>
                <View>
                    {content && <Text>{content}</Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ffffff',
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 3.22,

        elevation: 4,

        padding: 20,
        margin: 10,
    }
})
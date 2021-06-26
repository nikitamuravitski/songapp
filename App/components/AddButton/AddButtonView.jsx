import React from 'react'
import { FAB } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

export const AddButtonView = ({ pressHandler, buttonTitle }) => {
    return <View style={styles.wrapper}>
        <FAB title={buttonTitle} onPress={pressHandler}/>
    </View>
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 40,
        right: 20
    }
})
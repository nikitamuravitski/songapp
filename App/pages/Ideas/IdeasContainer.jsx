import React from 'react'
import { IdeasView } from './IdeasView'
import { useNavigation } from '@react-navigation/native';

export const IdeasContainer = (props) => {
    const navigation = useNavigation();
    const pressHandler = (params) => {
        navigation.push('Editor', { ...params })
    }
    return <IdeasView pressHandler={pressHandler} {...props} />
}
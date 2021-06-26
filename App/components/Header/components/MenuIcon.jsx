import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MoreOutlined } from '@ant-design/icons'

export const MenuIcon = () => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.5}>
                {/* <MoreOutlined style={{
                    color: 'white',
                    fontSize: '24px',
                    margin: 0
                }}/> */}
            </TouchableOpacity>
        </View>
    )
}

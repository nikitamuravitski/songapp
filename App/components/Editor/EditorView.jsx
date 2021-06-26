import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export const EditorView = ({
    hasName
}) => {

    const [content, setContent] = useState('')
    const [sectionName, setSectionName] = useState('Section Name')

    return <View style={styles.container}>
 
        { hasName && <TextInput value={sectionName} onChangeText={text => setSectionName(text)}/>}
        <TextInput
            multiline
            placeholder='What are you thinking?'
            style={styles.editor} 
            onChangeText={(text) => setContent(text)}
            spellCheck={false}
            // value isn`t specified explicitly
            //Text input has no lineHeight Style property
        >
           {/* So this workaround is working */}
            <Text>{content}</Text>
        </TextInput>
    </View >
}

const styles = StyleSheet.create({
    name: {
        fontWeight: '700'
    },
    editor: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 16,
        lineHeight: 24
    },
    container: {
        position: 'relative',
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
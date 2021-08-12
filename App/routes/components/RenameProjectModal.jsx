import React, { useState } from "react";
import { TextInput, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default ({
  projectName,
  renameProjectHandler,
  isModalVisible,
  setModalVisible
}) => {
  const [name, setName] = useState(projectName)
  const [savePress, setSavePress] = useState(false)
  const onCloseHandler = () => {
    if (projectName !== name) {
      renameProjectHandler(name)
      setModalVisible(false)
    } else setModalVisible(false)
    setSavePress()
  }
  const onSaveHandler = () => {
    setSavePress(true)
    // setTimeout(setSavePress(false), 900)
    setTimeout(
      onCloseHandler
      , 300
    )


  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => onCloseHandler()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              value={name}
              hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
              onChangeText={text => setName(text)}
            />
            <Pressable
              style={[styles.button, savePress ? styles.buttonClose : styles.buttonOpen]}
              onPress={() => onSaveHandler()}
            >
              <Text
                style={styles.textStyle}
              >
                {savePress ? 'Saved!' : 'Save'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    width: 160,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#949fff",
  },
  buttonClose: {
    backgroundColor: "#55df7e",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default ({
  addVersionHandler,
  copyVersionHandler,
  copySectionHandler
}) => {
  return <View style={styles.wrapper}>
    <Menu>
      <MenuTrigger customStyles={{ border: 0, borderRadius: 8 }}>
        <Image source={require('../../../assets/more.png')} style={{ width: 16, height: 16 }} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => copyVersionHandler()} text='Copy version' />
        <MenuOption onSelect={() => addVersionHandler()} text='Add version' />
        <MenuOption onSelect={() => copySectionHandler()} text='Copy section' />
      </MenuOptions>
    </Menu>
  </View>
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 10,
    top: 15,
  }
})
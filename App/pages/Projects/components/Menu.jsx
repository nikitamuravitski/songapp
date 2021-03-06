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
import moreButton from '../../../assets/more.png'
export default ({ options }) => {
  const menuOptions = options.map(option => <MenuOption key={option.label} onSelect={option.callback} text={option.label} />
  )
  return <View style={styles.wrapper}>
    <Menu>
      <MenuTrigger customStyles={{ border: 0, borderRadius: 8 }}>
        <Image source={moreButton} style={{ width: 20, height: 20 }} />
      </MenuTrigger>
      <MenuOptions>
        {menuOptions}
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
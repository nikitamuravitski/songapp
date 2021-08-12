import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProjectUuid, getCurrentProject, renameProject } from '../../state/projects';
import RenameProjectModal from './RenameProjectModal'

import hamburgerIcon from '../../assets/hamburger-icon.png'


export default () => {
  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = useState(false)
  const projectUuid = useSelector(getCurrentProjectUuid)
  const project = useSelector(getCurrentProject)
  const renameProjectHandler = (newName) => {
    dispatch(renameProject({ projectUuid, newName })) // should be called when hit save on opened modal
  }
  const options = [
    {
      label: 'Rename',
      callback: () => setModalVisible(true)
    }
  ]
  const menuOptions = options.map(option => <MenuOption onSelect={option.callback} text={option.label} />)
  return <View style={styles.wrapper}>
    <Menu>
      <MenuTrigger customStyles={{ border: 0, borderRadius: 8 }}>
        <Image source={hamburgerIcon} style={{ width: 20, height: 20 }} />
      </MenuTrigger>
      <MenuOptions>
        {menuOptions}
      </MenuOptions>
    </Menu>
    <RenameProjectModal
      projectName={project.name}
      renameProjectHandler={renameProjectHandler}
      ismodalVisible={isModalVisible}
      setModalVisible={setModalVisible}
    />
  </View>
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 10,
    top: 15,
  }
})
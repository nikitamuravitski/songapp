import React from 'react'
import { useSelector } from 'react-redux'
import ProjectWorldView from '../components/ProjectWorld'
import { getCurrentWorld } from '../../../state/worlds'

export default () => {
  let world = useSelector(getCurrentWorld)
  return <ProjectWorldView name={world.name} worldUuid={world.uuid} />
}

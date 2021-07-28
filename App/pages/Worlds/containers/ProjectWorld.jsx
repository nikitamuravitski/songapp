import React from 'react'
import { useSelector } from 'react-redux'
import WorldsView from '../components/Worlds'
import { getCurrentWorld } from '../../../state/worlds'

export default () => {
  let data = useSelector(getCurrentWorld)
  console.log(data)
  return <WorldsView data={data} />
}

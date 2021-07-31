import React, { useEffect } from 'react'

import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ideas from '../../Ideas/containers/List'
import { setCurrentWorldUuid } from '../../../state/worlds'

export default ({ worldUuid }) => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   return dispatch(setCurrentWorldUuid(null))
  // }, [])


  //**** for some reason it rewrites currentWorldUuid earlier than selector picks it up ****//

  return <Ideas worldUuid={worldUuid} />
}

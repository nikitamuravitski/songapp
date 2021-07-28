import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeContent, changeName, getCurrentIdea } from '../../../state/ideas'
import uuid from 'react-native-uuid'
import EditorView from '../components/Editor'

export default () => {
  const dispatch = useDispatch()

  const idea = useSelector(getCurrentIdea)
  const uuid = idea.uuid

  const changeContentHandler = (uuid, content) => dispatch(changeContent({
    uuid,
    content
  }))

  const changeNameHandler = (uuid, name) => dispatch(changeName({
    uuid,
    name
  }))

  const addButtonPressHandler = index => dispatch(addSection({
    index,
    newSectionUuid: `section.${uuid.v4()}`,
    projectUuid
  }))

  return (
    <EditorView
      idea={idea}
      // addButtonPressHandler={addButtonPressHandler}
      changeContentHandler={changeContentHandler}
      changeNameHandler={changeNameHandler}
    />
  )
}

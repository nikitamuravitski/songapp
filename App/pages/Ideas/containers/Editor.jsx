import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeContent, changeName, getCurrentIdea } from '../../../state/ideas'
import { getCurrentWorldUuid } from '../../../state/worlds'
import EditorView from '../components/Editor'

export default () => {
  const dispatch = useDispatch()

  const idea = useSelector(getCurrentIdea)
  const ideaUuid = idea.uuid
  const worldUuid = useSelector(getCurrentWorldUuid)

  const changeContentHandler = (content) => dispatch(changeContent({
    uuid: ideaUuid,
    content
  }))

  const changeNameHandler = (name) => dispatch(changeName({
    uuid: ideaUuid,
    name
  }))

  return (
    <EditorView
      idea={idea}
      ideaUuid={ideaUuid}
      worldUuid={worldUuid}
      changeContentHandler={changeContentHandler}
      changeNameHandler={changeNameHandler}
    />
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeContent, changeName, getCurrentIdea } from '../../../state/ideas'
import { getCurrentWorldUuid } from '../../../state/worlds'
import EditorView from '../components/Editor'

export default (props) => {
  const dispatch = useDispatch()

  const idea = useSelector(getCurrentIdea)
  const ideaUuid = idea.uuid
  const worldUuid = useSelector(getCurrentWorldUuid)

  const changeContentGlobalState = (content) => dispatch(changeContent({
    uuid: ideaUuid,
    content
  }))

  const changeNameGlobalState = (name) => dispatch(changeName({
    uuid: ideaUuid,
    name
  }))

  return (
    <EditorView
      idea={idea}
      ideaUuid={ideaUuid}
      worldUuid={worldUuid}
      changeContentGlobalState={changeContentGlobalState}
      changeNameGlobalState={changeNameGlobalState}
    />
  )
}

import { createSelector, createSlice, current } from "@reduxjs/toolkit";

const ideasSlice = createSlice({
  name: 'ideas',
  initialState: {
    ideas: { 'unsorted': [] }, // {worldUuid: [ideaUuid]}
    ideasData: {} // {ideaUuid: {uuid: string, name: string, content: object }}
  },
  reducers: {
    changeContent: (state, action) => {
      
      const { uuid, content } = action.payload
      state.ideasData[uuid].content = content
    },
    changeName: (state, action) => {
      const { uuid, name } = action.payload
      state.ideasData[uuid].name = name
    },
    createIdea: (state, action) => {
      const { uuid, worldUuid } = action.payload
      const newIdea = {
        uuid,
        name: 'New Idea',
        content: ''
      }
      if (!state.ideas[worldUuid]) state.ideas[worldUuid] = []
      state.ideas[worldUuid].push(uuid)
      state.ideasData[uuid] = newIdea
    },
    remove: (state, action) => {
      const { uuid } = action.payload
      state.ideas = state.ideas.filter(ideaUuid => ideaUuid !== uuid)
    }
  }
})

export const { createIdea, changeContent, changeName } = ideasSlice.actions
export const { reducer } = ideasSlice




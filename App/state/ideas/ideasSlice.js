import { createSlice } from '@reduxjs/toolkit'

const ideasSlice = createSlice({
  name: 'ideas',
  initialState: {
    currentIdeaUuid: null,
    recentIdeasUuidList: [], // [ideaUuid1, ideaUuid2, ideaUuid1]
    ideas: { unsorted: [] }, // {worldUuid: [ideaUuid]}
    ideasData: {} // {ideaUuid: {uuid: string, name: string, content: object }}
  },
  reducers: {
    setCurrentIdeaUuid: (state, action) => {
      state.currentIdeaUuid = action.payload
    },
    changeContent: (state, action) => {
      const { uuid, content } = action.payload
      state.ideasData[uuid].content = content
    },
    changeName: (state, action) => {
      const { uuid, name } = action.payload
      state.ideasData[uuid].name = name
    },
    createWorldForIdeas: (state, action) => {
      state.ideas[action.payload] = []
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
    updateRecentIdeasList: (state, action) => {
      const ideaUuid = action.payload
      state.recentIdeasUuidList.unshift(ideaUuid)
      if (state.recentIdeasUuidList.length >= 3) state.recentIdeasUuidList.pop()
    },
    removeIdea: (state, action) => {
      const { ideaUuid, worldUuid } = action.payload
      state.ideas[worldUuid] = state.ideas[worldUuid].filter(uuid => uuid !== ideaUuid)
      state.recentIdeasUuidList = state.recentIdeasUuidList.filter(uuid => uuid !== ideaUuid)
      delete state.ideasData[ideaUuid]
    }
  }
})

export const {
  createIdea,
  changeContent,
  changeName,
  setCurrentIdeaUuid,
  createWorldForIdeas,
  updateRecentIdeasList,
  removeIdea
} = ideasSlice.actions
export const { reducer } = ideasSlice

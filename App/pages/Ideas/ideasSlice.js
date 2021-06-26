import { createSlice, current } from "@reduxjs/toolkit";

const ideasSlice = createSlice({
name: 'ideas',
initialState: {
    ideas: {}, // {worldUuid: [ideaUuid]}
    ideasData: {} // {ideaUuid: {uuid: string, name: string, content: object }}
},
reducers: {
    loadIdea: (state, action) => {
        const ideaId = action.payload.ideaId
        const idea = getItem(keys.idea({ uuid: ideaId }))
        state.ideasData[ideaId] = idea
      },
      changeContent: (state, action) => {
        const { uuid, content } = action.payload
        state.ideasData[uuid].content = content
        saveItem(keys.idea({ uuid }), state.ideasData[uuid])
      },
      changeName: (state, action) => {
        const { uuid, name } = action.payload
        state.ideasData[uuid].name = name
        saveItem(keys.idea({ uuid }), state.ideasData[uuid])
      },
      createIdea: (state, action) => {
        const { uuid, worldId } = action.payload
        const newIdea = {
          uuid,
          name: 'New Idea',
          content: ''
        }
        if (!state.ideas[worldId]) state.ideas[worldId] = []
        state.ideas[worldId].push(uuid)
        state.ideasData[uuid] = newIdea
        saveItem(keys.idea({ uuid }), newIdea)
        saveIdeas(state)
      },
      remove: (state, action) => {
        const { uuid } = action.payload
        state.ideas = state.ideas.filter(ideaUuid => ideaUuid !== uuid)
        saveIdeas(state)
      }
    }
})


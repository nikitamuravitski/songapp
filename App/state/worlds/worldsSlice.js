import { createSlice } from '@reduxjs/toolkit'

const worldsSlice = createSlice({
  name: 'worlds',
  initialState: {
    currentWorldUuid: null,
    worlds: ['unsorted'], // ['worldUuid', ...]
    worldsData: {
      unsorted: {
        uuid: 'unsorted',
        name: 'Unsorted',
        ideas: []
      }
    } // {worldUuid: {uuid: string, name: string, ideas: array }}
  },

  reducers: {
    setCurrentWorldUuid: (state, action) => {
      state.currentWorldUuid = action.payload
    },
    createWorld: (state, action) => {
      const { uuid, name } = action.payload
      const newWorld = {
        uuid,
        name,
        ideas: []
      }

      state.worlds.push(uuid)
      state.worldsData[uuid] = newWorld
    },
    changeName: (state, action) => {
      const { uuid, name } = action.payload
      state.worldsData[uuid].name = name
    },
    addIdeaToWorld: (state, action) => {
      const { ideaUuid, worldUuid } = action.payload
      state.worldsData[worldUuid].ideas.push(ideaUuid)
      state.currentWorldUuid = worldUuid
    },
    removeIdeaFromWorld: (state, action) => {
      const { worldUuid, ideaUuid } = action.payload
      state.worldsData[worldUuid].ideas = state.worldsData[worldUuid].ideas.filter(uuid => uuid !== ideaUuid)
    }
  }
})

export const {
  createWorld,
  changeName,
  addIdeaToWorld,
  setCurrentWorldUuid,
  removeIdeaFromWorld
} = worldsSlice.actions
export const { reducer } = worldsSlice

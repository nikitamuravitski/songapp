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
      const { worldUuid } = action.payload
      state.currentWorldUuid = worldUuid
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
    },
    remove: (state, action) => {
      const { uuid } = action.payload
      state.worlds = state.ideas.filter(worldUuid => worldUuid !== uuid)
    }
  }
})

export const { createWorld, changeName, addIdeaToWorld, setCurrentWorldUuid, remove } = worldsSlice.actions
export const { reducer } = worldsSlice

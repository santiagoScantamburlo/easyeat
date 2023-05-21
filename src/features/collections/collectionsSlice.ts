import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface CollectionSlice {
  collections: Collection[]
}

export interface Collection {
  name: string
  foods: string[]
}

const initialState: CollectionSlice = {
  collections: [],
}

export const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setCollections: (state, action: PayloadAction<Collection[]>) => {
      state.collections = action.payload
      localStorage.setItem("collections", JSON.stringify(state.collections))
    },

    addCollection: (state, action: PayloadAction<Collection>) => {
      state.collections.push(action.payload)
      localStorage.setItem("collections", JSON.stringify(state.collections))
    },

    addFoodToCollection: (
      state,
      action: PayloadAction<{ collectionName: string; foodName: string }>,
    ) => {
      const collection = state.collections.find(
        (collection) => collection.name === action.payload.collectionName,
      )
      if (collection) {
        collection.foods.push(action.payload.foodName)
        localStorage.setItem("collections", JSON.stringify(state.collections))
      }
    },
  },
})

export const { setCollections, addCollection, addFoodToCollection } =
  collectionSlice.actions

export const collections = (state: RootState) => state.collections.collections

export default collectionSlice.reducer

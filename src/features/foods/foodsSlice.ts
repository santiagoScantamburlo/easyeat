import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState: string = ""

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<string>) => {
      state = action.payload
    },

    addFood: (state, action: PayloadAction<string>) => {
      state = action.payload
    },
  },
})

export const { setFoods, addFood } = foodSlice.actions

export const foods = (state: RootState) => state.foods

export default foodSlice.reducer

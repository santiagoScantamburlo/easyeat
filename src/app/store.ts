import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import collectionsReducer from "../features/collections/collectionsSlice"
import foodsReducer from "../features/foods/foodsSlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    collections: collectionsReducer,
    foods: foodsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

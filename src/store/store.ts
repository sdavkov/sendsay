import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './slices/mode'
import convasReducer from './slices/convas'
import mathReducer from './slices/math'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
		mode: modeReducer,
		convas: convasReducer,
		math: mathReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
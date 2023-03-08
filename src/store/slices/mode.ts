import { createSlice } from "@reduxjs/toolkit";

export enum Mode {
	Runtime,
	Constructor
}

export enum Place {
	Sidebar,
	Canvas,
}

export type ModeState = {
	currentMode: Mode;
}

const initialState: ModeState = {
	currentMode: Mode.Constructor,
}

export const modeSlice = createSlice({
	name: 'mode',
	initialState,
	reducers: {
		changeCurrentMode: (state) => {
			state.currentMode = state.currentMode === Mode.Constructor ? Mode.Runtime : Mode.Constructor;
		}
	}
})

// Action creators are generated for each case reducer function
export const { changeCurrentMode } = modeSlice.actions

export default modeSlice.reducer
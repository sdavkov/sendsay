import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TypeSidebarPanel {
	display,
	operations,
	digits,
	equal
}

export type ConvasState = {
	panels: Array<TypeSidebarPanel>;
}

const initialState: ConvasState = {
	panels: []
}

export const convasSlice = createSlice({
	name: 'convas',
	initialState,
	reducers: {
		addPanel: (state, action: PayloadAction<TypeSidebarPanel>) => {
			if (action.payload === TypeSidebarPanel.display)
				state.panels.unshift(action.payload)
			else
				state.panels.push(action.payload);
		},
		removePanel: (state, action: PayloadAction<TypeSidebarPanel>) => {
			state.panels.filter(p => p !== action.payload);
		},
		clearConvas: (state) => {
			state.panels = [];
		}
	}
})

// Action creators are generated for each case reducer function
export const { addPanel, removePanel, clearConvas } = convasSlice.actions

export default convasSlice.reducer
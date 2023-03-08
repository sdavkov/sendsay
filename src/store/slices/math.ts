import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum MathOperation {
	divide,
	multiply,
	subtract,
	add
}

export type MathState = {
	operand1: string | null;
	operand2: string | null;
	operator: MathOperation | null;
	result: string | null;
}

const initialState: MathState = {
	operand1: null,
	operand2: null,
	operator: null,
	result: null,
}

export const mathSlice = createSlice({
	name: 'math',
	initialState,
	reducers: {
		setOperand: (state, action: PayloadAction<string>) => {
			if (state.operator) {
				state.operand2 = state.operand2 ? state.operand2 + action.payload : action.payload;
			}
			else {
				state.operand1 = state.operand1 ? state.operand1 + action.payload : action.payload;
			}
		}
	}
})

// Action creators are generated for each case reducer function
export const { setOperand } = mathSlice.actions

export default mathSlice.reducer
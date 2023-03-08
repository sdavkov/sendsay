import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Operators {
	divide = '/',
	multiply = 'x',
	subtract = '-',
	add = '+'
}

export type MathState = {
	operand1: string | null;
	operand2: string | null;
	operator: Operators | null;
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
		},
		setOperator: (state, action: PayloadAction<Operators>) => {
			if (state.operand1) {
				state.operator = action.payload;
			}
		},
		compute: (state) => {
			if (!state.operand1 || !state.operand2 || !state.operator) return;
			const operand1 = parseFloat(state.operand1);
			const operand2 = parseFloat(state.operand2);
			switch (state.operator) {
				case Operators.add:
					state.result = String(operand1 + operand2);
					break;
				case Operators.divide:
					state.result = String(operand1 / operand2);
					break;
				case Operators.multiply:
					state.result = String(operand1 * operand2);
					break;
				case Operators.subtract:
					state.result = String(operand1 - operand2);
					break;
				default:
					break;
			}
		},
		reset: (state) => {
			state.operand1 = null;
			state.operand2 = null;
			state.operator = null;
			state.result = null;
		}
	}
})

// Action creators are generated for each case reducer function
export const { setOperand, setOperator, compute, reset } = mathSlice.actions

export default mathSlice.reducer
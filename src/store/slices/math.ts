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
	display: string;
}

const initialState: MathState = {
	operand1: null,
	operand2: null,
	operator: null,
	display: '0',
}

export const ERROR_RES = 'Не оперделено';

function calculate(operand1: string, operand2: string, operator: Operators) {
	operand1 = operand1.replace(',', '.');
	operand2 = operand2.replace(',', '.');
	const var1 = parseFloat(operand1);
	const var2 = parseFloat(operand2);
	let res = 0;
	switch (operator) {
		case Operators.add:
			res = var1 + var2;
			break;
		case Operators.divide:
			res = var1 / var2;
			break;
		case Operators.multiply:
			res = var1 * var2;
			break;
		case Operators.subtract:
			res = var1 - var2;
			break;
		default:
			res = 0;
			break;
	}

	if (isNaN(res) || !isFinite(res)) {
		return ERROR_RES;
	}

	return String(res).replace('.', ',');
}

export const mathSlice = createSlice({
	name: 'math',
	initialState,
	reducers: {
		setOperand: (state, action: PayloadAction<string>) => {
			if (state.operator) {
				if (state.operand2 === '0') state.operand2 = '';
				if ((!state.operand2 || state.operand2.length === 0) && action.payload === ',') state.operand2 = '0';
				state.operand2 = state.operand2 ? state.operand2 + action.payload : action.payload;
				state.display = state.operand2;
			}
			else {
				if (state.operand1 === '0') state.operand1 = '';
				if ((!state.operand1 || state.operand1.length === 0) && action.payload === ',') state.operand1 = '0';
				state.operand1 = state.operand1 ? state.operand1 + action.payload : action.payload;
				state.display = state.operand1;
			}
		},
		setOperator: (state, action: PayloadAction<Operators>) => {
			if (state.operand1 && !state.operand2) {
				state.operator = action.payload;
			}
			else if (state.operand1 && state.operand2 && state.operator) {
				state.operand1 = calculate(state.operand1, state.operand2, state.operator);
				if (state.operand1 === ERROR_RES) {
					state.operand1 = null;
					state.operand2 = null;
					state.operator = null;
					state.display = '0';
				}
				else {
					state.display = state.operand1;
					state.operator = action.payload;
					state.operand2 = null;
				}
			}
		},
		compute: (state) => {
			if (!state.operand1 || !state.operand2 || !state.operator) return;
			state.display = calculate(state.operand1, state.operand2, state.operator);
			state.operand1 = null;
			state.operand2 = null;
			state.operator = null;
		},
		reset: (state) => {
			state.operand1 = null;
			state.operand2 = null;
			state.operator = null;
			state.display = '0';
		}
	}
})

// Action creators are generated for each case reducer function
export const { setOperand, setOperator, compute, reset } = mathSlice.actions

export default mathSlice.reducer
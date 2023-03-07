import React, { createContext, useCallback, useState } from 'react'

export enum Mode {
	Runtime,
	Constructor
}

export enum MathOperation {
	divide,
	multiply,
	subtract,
	add
}

type GlobalState = {
	currentMode: Mode;
	changeCurrentMode: () => void;
	setCurrentMathOperation: (operation: MathOperation) => void;
	setDigit: (digit: number | ',') => void;
	operand1: string;
	operand2: string | null;
}

const initValues: GlobalState = {
	currentMode: Mode.Constructor,
	changeCurrentMode: () => undefined,
	setCurrentMathOperation: (operation: MathOperation) => undefined,
	setDigit: (digit: number | ',') => undefined,
	operand1: '0',
	operand2: null,
}

export const GlobalContext = createContext<GlobalState>(initValues);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentMode, setCurrentMode] = useState<Mode>(Mode.Constructor);
	const [currentMathOperation, setCurrentMathOperation] = useState<MathOperation | null>(null);
	const [operand1, setOperand1] = useState<string>('0');
	const [operand2, setOperand2] = useState<string | null>(null);

	const changeCurrentMode = useCallback(() => {
		setCurrentMode(prev => prev === Mode.Constructor ? Mode.Runtime : Mode.Constructor);
	}, [setCurrentMode]);

	const setDigit = useCallback((digit: number | ',') => {
		setOperand1(prev => prev + digit);
	}, [setOperand1, setOperand2]);

	const values: GlobalState = {
		currentMode,
		changeCurrentMode,
		setCurrentMathOperation,
		setDigit,
		operand1,
		operand2,
	}

	return (
		<GlobalContext.Provider value={values}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider
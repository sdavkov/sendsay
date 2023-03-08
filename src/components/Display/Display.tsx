import React, { memo, useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas';
import { Mode } from '../../store/slices/mode';
import { useAppDispatch, useAppSelector } from '../../store/store';
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel';
import './Display.css'

const Display = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const operand1 = useAppSelector((state) => state.math.operand1)
	const operand2 = useAppSelector((state) => state.math.operand2)
	const operator = useAppSelector((state) => state.math.operator)
	const result = useAppSelector((state) => state.math.result)
	const mode = useAppSelector((state) => state.mode.currentMode)
	const isDrag = panels.includes(TypeSidebarPanel.display)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		if (mode === Mode.Runtime) return;
		dispatch(removePanel(TypeSidebarPanel.display));
	}, [dispatch, mode])

	let value = '0';
	if (result) {
		value = result;
	}
	else if (operator && operand2) {
		value = operand2;
	}
	else if (!operator && operand1) {
		value = operand1;
	}

	return (
		<SidebarPanel
			mode={mode}
			type={TypeSidebarPanel.display}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='display'>
				{value}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
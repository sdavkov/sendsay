import React, { useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { Operators, setOperator } from '../../store/slices/math'
import { Mode } from '../../store/slices/mode'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Operations.css'

const Operations = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.operations)
	const mode = useAppSelector((state) => state.mode.currentMode)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		if (mode === Mode.Runtime) return;
		dispatch(removePanel(TypeSidebarPanel.operations));
	}, [dispatch, mode])

	const setOperatorHandler = useCallback((operation: string) => {
		if (mode === Mode.Constructor) return;
		dispatch(setOperator(operation as Operators))
	}, [dispatch, mode]);

	return (
		<SidebarPanel
			mode={mode}
			type={TypeSidebarPanel.operations}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='operations'>
				<SidebarButton title={Operators.divide} onClick={setOperatorHandler} />
				<SidebarButton title={Operators.multiply} onClick={setOperatorHandler} />
				<SidebarButton title={Operators.subtract} onClick={setOperatorHandler} />
				<SidebarButton title={Operators.add} onClick={setOperatorHandler} />
			</div>
		</SidebarPanel>
	)
}

export default Operations
import React, { useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { compute } from '../../store/slices/math'
import { Mode } from '../../store/slices/mode'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './EqualButton.css'

const EqualButton = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.equal)
	const mode = useAppSelector((state) => state.mode.currentMode)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		if (mode === Mode.Runtime) return;
		dispatch(removePanel(TypeSidebarPanel.equal));
	}, [dispatch, mode])

	const onClickHandler = useCallback(() => {
		dispatch(compute());
	}, [dispatch])

	return (
		<SidebarPanel
			mode={mode}
			type={TypeSidebarPanel.equal}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='equalButton' onClick={onClickHandler}>
				=
			</div>
		</SidebarPanel>
	)
}

export default EqualButton
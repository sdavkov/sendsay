import React, { memo, useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas';
import { useAppDispatch, useAppSelector } from '../../store/store';
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel';
import './Display.css'

const Display = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.display)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		dispatch(removePanel(TypeSidebarPanel.display));
	}, [dispatch])

	return (
		<SidebarPanel
			type={TypeSidebarPanel.display}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='display'>
				{0}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
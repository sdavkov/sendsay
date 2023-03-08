import React, { useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './EqualButton.css'

const EqualButton = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.equal)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		dispatch(removePanel(TypeSidebarPanel.equal));
	}, [dispatch])

	return (
		<SidebarPanel
			type={TypeSidebarPanel.equal}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='equalButton'>
				=
			</div>
		</SidebarPanel>
	)
}

export default EqualButton
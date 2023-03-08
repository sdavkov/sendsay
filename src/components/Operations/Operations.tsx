import React, { useCallback, useContext } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Operations.css'

const Operations = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.operations)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		dispatch(removePanel(TypeSidebarPanel.operations));
	}, [dispatch])

	const onClickHandler = () => { }

	return (
		<SidebarPanel
			type={TypeSidebarPanel.operations}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='operations'>
				<SidebarButton title='/' onClick={onClickHandler} />
				<SidebarButton title='X' onClick={onClickHandler} />
				<SidebarButton title='-' onClick={onClickHandler} />
				<SidebarButton title='+' onClick={onClickHandler} />
			</div>
		</SidebarPanel>
	)
}

export default Operations
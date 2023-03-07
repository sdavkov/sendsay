import React, { useCallback, useContext } from 'react'
import { TypeSidebarPanel } from '../../store/slices/convas'
import { useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Operations.css'

export enum MathOperation {
	divide,
	multiply,
	subtract,
	add
}

const Operations = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.operations)

	const onClickHandler = () => {}

	return (
		<SidebarPanel type={TypeSidebarPanel.operations} isDrag={isDrag}>
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
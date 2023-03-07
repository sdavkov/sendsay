import React, { memo } from 'react'
import { TypeSidebarPanel } from '../../store/slices/convas';
import { useAppSelector } from '../../store/store';
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel';
import './Display.css'

const Display = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.display)

	return (
		<SidebarPanel type={TypeSidebarPanel.display} isDrag={isDrag}>
			<div className='display'>
				{0}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
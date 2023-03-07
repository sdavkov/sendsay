import React from 'react'
import { TypeSidebarPanel } from '../../store/slices/convas'
import { useAppSelector } from '../../store/store'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './EqualButton.css'

const EqualButton = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.equal)

	return (
		<SidebarPanel type={TypeSidebarPanel.equal} isDrag={isDrag}>
			<div className='equalButton'>
				=
			</div>
		</SidebarPanel>
	)
}

export default EqualButton
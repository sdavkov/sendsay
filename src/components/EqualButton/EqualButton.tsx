import React from 'react'
import { TypeSidebarPanel } from '../../context/GlobalContext'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './EqualButton.css'

const EqualButton = () => {
	return (
		<SidebarPanel type={TypeSidebarPanel.equal}>
			<div className='equalButton'>
				=
			</div>
		</SidebarPanel>
	)
}

export default EqualButton
import React, { memo } from 'react'
import './SidebarPanel.css'

const SidebarPanel = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='sidebarPanel'>
			{children}
		</div>
	)
}

export default memo(SidebarPanel)
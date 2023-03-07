import React, { FC, memo } from 'react'
import { useDrag } from 'react-dnd'
import { TypeSidebarPanel } from '../../../context/GlobalContext';
import './SidebarPanel.css'

type Props = {
	children: React.ReactNode;
	type: TypeSidebarPanel;
}

const SidebarPanel: FC<Props> = ({ children }) => {

	const [{ opacity }, ref] = useDrag(() => ({
		type: 'display',
		item: {},
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.5 : 1
		})
	}))

	return (
		<div
			style={{ opacity }}
			ref={ref}
			className='sidebarPanel'>
			{children}
		</div>
	)
}

export default memo(SidebarPanel)
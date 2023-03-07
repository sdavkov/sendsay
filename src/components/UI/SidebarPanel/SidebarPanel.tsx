import React, { FC, memo } from 'react'
import { useDrag } from 'react-dnd'
import { TypeSidebarPanel } from '../../../store/slices/convas';
import './SidebarPanel.css'

type Props = {
	children: React.ReactNode;
	type: TypeSidebarPanel;
	isDrag: boolean;
}

const SidebarPanel: FC<Props> = ({ children, type, isDrag }) => {

	const [{ isDraging }, ref] = useDrag(() => ({
		type: 'panel',
		item: { type },
		collect: (monitor) => ({
			isDraging: monitor.isDragging()
		})
	}))

	return (
		<div
			ref={ref}
			className={`sidebarPanel ${isDrag || isDraging ? 'drag' : ''}`}>
			{children}
		</div>
	)
}

export default memo(SidebarPanel)
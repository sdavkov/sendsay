import React, { FC, memo } from 'react'
import { useDrag } from 'react-dnd'
import { TypeSidebarPanel } from '../../../store/slices/convas';
import './SidebarPanel.css'

type Props = {
	children: React.ReactNode;
	type: TypeSidebarPanel;
	isDrag: boolean;
	onDoubleClick: (type: TypeSidebarPanel) => void;
}

const SidebarPanel: FC<Props> = ({ children, type, isDrag, onDoubleClick }) => {

	const [{ isDraging }, ref] = useDrag(() => ({
		type: 'panel',
		item: { type },
		collect: (monitor) => ({
			isDraging: monitor.isDragging()
		})
	}))

	return (
		<div
			onDoubleClick={() => onDoubleClick(type)}
			ref={ref}
			className={`sidebarPanel ${isDrag || isDraging ? 'draged' : ''}`}
		>
			{children}
		</div>
	)
}

export default memo(SidebarPanel)
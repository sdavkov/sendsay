import React, { FC, memo } from 'react'
import { useDrag } from 'react-dnd'
import { TypeSidebarPanel } from '../../../store/slices/convas';
import './SidebarPanel.css'
import { Mode } from '../../../store/slices/mode'

type Props = {
	children: React.ReactNode;
	type: TypeSidebarPanel;
	isDrag: boolean;
	onDoubleClick: (type: TypeSidebarPanel) => void;
	mode: Mode;
}

const SidebarPanel: FC<Props> = ({ children, type, isDrag, onDoubleClick, mode }) => {
	const [{ isDraging }, ref] = useDrag(() => ({
		type: 'panel',
		item: { type },
		canDrag: () => {
			if (mode === Mode.Constructor) return true;
			return false
		},
		collect: (monitor) => ({
			isDraging: monitor.isDragging()
		})
	}), [mode, type])

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
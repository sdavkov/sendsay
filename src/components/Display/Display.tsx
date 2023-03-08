import React, { FC, memo, useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas';
import { ERROR_RES } from '../../store/slices/math';
import { Mode, Place } from '../../store/slices/mode';
import { useAppDispatch, useAppSelector } from '../../store/store';
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel';
import './Display.css'

type Props = {
	currentPlace: Place;
}

const Display: FC<Props> = ({ currentPlace }) => {
	const panels = useAppSelector((state) => state.convas.panels)
	const display = useAppSelector((state) => state.math.display)
	const mode = useAppSelector((state) => state.mode.currentMode)
	const isDrag = panels.includes(TypeSidebarPanel.display)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		if (mode === Mode.Runtime) return;
		dispatch(removePanel(TypeSidebarPanel.display));
	}, [dispatch, mode])

	let value = '0';
	if (currentPlace === Place.Canvas) {
		value = display;
	}

	return (
		<SidebarPanel
			mode={mode}
			type={TypeSidebarPanel.display}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className={`display ${value === ERROR_RES ? 'error' : ''}`}>
				{value}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
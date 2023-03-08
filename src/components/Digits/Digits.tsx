import React, { useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { setOperand } from '../../store/slices/math'
import { Mode } from '../../store/slices/mode'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Digits.css'

const Digits = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const mode = useAppSelector((state) => state.mode.currentMode)
	const isDrag = panels.includes(TypeSidebarPanel.digits)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		if (mode === Mode.Runtime) return;
		dispatch(removePanel(TypeSidebarPanel.digits));
	}, [dispatch, mode])

	const setDigitHandler = useCallback((digit: string | ',') => {
		if (mode === Mode.Constructor) return;
		dispatch(setOperand(digit))
	}, [dispatch, mode]);

	return (
		<SidebarPanel
			mode={mode}
			type={TypeSidebarPanel.digits}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='digits'>
				<SidebarButton title='7' onClick={setDigitHandler} />
				<SidebarButton title='8' onClick={setDigitHandler} />
				<SidebarButton title='9' onClick={setDigitHandler} />
				<SidebarButton title='4' onClick={setDigitHandler} />
				<SidebarButton title='5' onClick={setDigitHandler} />
				<SidebarButton title='6' onClick={setDigitHandler} />
				<SidebarButton title='1' onClick={setDigitHandler} />
				<SidebarButton title='2' onClick={setDigitHandler} />
				<SidebarButton title='3' onClick={setDigitHandler} />
				<SidebarButton title='0' onClick={setDigitHandler} styles={{ gridColumn: 'span 2' }} />
				<SidebarButton title=',' onClick={setDigitHandler} />
			</div>
		</SidebarPanel>
	)
}

export default Digits
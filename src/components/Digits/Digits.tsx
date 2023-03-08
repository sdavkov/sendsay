import React, { useCallback } from 'react'
import { removePanel, TypeSidebarPanel } from '../../store/slices/convas'
import { setOperand } from '../../store/slices/math'
import { useAppDispatch, useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Digits.css'

const Digits = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.digits)
	const dispatch = useAppDispatch()

	const onPanelDoubleClickHandler = useCallback((type: TypeSidebarPanel) => {
		dispatch(removePanel(TypeSidebarPanel.digits));
	}, [dispatch])

	const setDigit = useCallback((digit: string | ',') => {
		dispatch(setOperand(digit))
	}, [dispatch]);

	return (
		<SidebarPanel
			type={TypeSidebarPanel.digits}
			isDrag={isDrag}
			onDoubleClick={onPanelDoubleClickHandler}
		>
			<div className='digits'>
				<SidebarButton title='7' onClick={setDigit} />
				<SidebarButton title='8' onClick={setDigit} />
				<SidebarButton title='9' onClick={setDigit} />
				<SidebarButton title='4' onClick={setDigit} />
				<SidebarButton title='5' onClick={setDigit} />
				<SidebarButton title='6' onClick={setDigit} />
				<SidebarButton title='1' onClick={setDigit} />
				<SidebarButton title='2' onClick={setDigit} />
				<SidebarButton title='3' onClick={setDigit} />
				<SidebarButton title='0' onClick={setDigit} styles={{ gridColumn: 'span 2' }} />
				<SidebarButton title=',' onClick={setDigit} />
			</div>
		</SidebarPanel>
	)
}

export default Digits
import React, { useCallback } from 'react'
import { TypeSidebarPanel } from '../../store/slices/convas'
import { useAppSelector } from '../../store/store'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Digits.css'

const Digits = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const isDrag = panels.includes(TypeSidebarPanel.digits)
	
	const setDigit = useCallback((digit: number | ',') => { }, []);

	return (
		<SidebarPanel type={TypeSidebarPanel.digits} isDrag={isDrag}>
			<div className='digits'>
				<SidebarButton title='7' onClick={() => setDigit(7)} />
				<SidebarButton title='8' onClick={() => setDigit(8)} />
				<SidebarButton title='9' onClick={() => setDigit(8)} />
				<SidebarButton title='4' onClick={() => setDigit(4)} />
				<SidebarButton title='5' onClick={() => setDigit(5)} />
				<SidebarButton title='6' onClick={() => setDigit(6)} />
				<SidebarButton title='1' onClick={() => setDigit(1)} />
				<SidebarButton title='2' onClick={() => setDigit(2)} />
				<SidebarButton title='3' onClick={() => setDigit(3)} />
				<SidebarButton title='0' onClick={() => setDigit(0)} styles={{ gridColumn: 'span 2' }} />
				<SidebarButton title=',' onClick={() => setDigit(',')} />
			</div>
		</SidebarPanel>
	)
}

export default Digits
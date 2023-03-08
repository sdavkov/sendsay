import React from 'react'
import './Sidebar.css'
import Display from '../Display/Display'
import Operations from '../Operations/Operations'
import Digits from '../Digits/Digits'
import EqualButton from '../EqualButton/EqualButton'
import { Place } from '../../store/slices/mode'

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<Display currentPlace={Place.Sidebar} />
			<Operations />
			<Digits />
			<EqualButton />
		</aside>
	)
}

export default Sidebar
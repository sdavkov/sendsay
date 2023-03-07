import React from 'react'
import './Sidebar.css'
import Display from '../Display/Display'
import Operations from '../Operations/Operations'
import Digits from '../Digits/Digits'
import EqualButton from '../EqualButton/EqualButton'

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<Display />
			<Operations />
			<Digits />
			<EqualButton />
		</aside>
	)
}

export default Sidebar
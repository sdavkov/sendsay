import React, { FC, memo } from 'react'
import { TypeSidebarPanel } from '../../context/GlobalContext';
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel';
import './Display.css'

type Props = {
	value: number;
}

const Display: FC<Props> = ({ value }: Props) => {
	return (
		<SidebarPanel type={TypeSidebarPanel.display}>
			<div className='display'>
				{value}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
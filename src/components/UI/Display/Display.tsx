import React, { FC, memo } from 'react'
import SidebarPanel from '../SidebarPanel/SidebarPanel';
import './Display.css'

type Props = {
	value: number;
}

const Display: FC<Props> = ({ value }: Props) => {
	return (
		<SidebarPanel>
			<div className='display'>
				{value}
			</div>
		</SidebarPanel>
	)
}

export default memo(Display)
import React, { CSSProperties, FC, memo } from 'react'
import './SidebarButton.css'

type Props = {
	title: string;
	onClick: () => void;
	styles?: CSSProperties;
}

const SidebarButton: FC<Props> = ({ title, onClick, styles }) => {
	return (
		<div
			role='button'
			onClick={onClick}
			className='sidebarButton'
			style={styles}
		>
			{title}
		</div>
	)
}

export default memo(SidebarButton)
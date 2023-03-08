import React, { CSSProperties, FC, memo } from 'react'
import './SidebarButton.css'

type Props = {
	title: string;
	onClick: (digit: string) => void;
	styles?: CSSProperties;
}

const SidebarButton: FC<Props> = ({ title, onClick, styles }) => {

	const onClickHandler = () => {
		onClick(title);
	}

	return (
		<div
			role='button'
			onClick={onClickHandler}
			className='sidebarButton'
			style={styles}
		>
			{title}
		</div>
	)
}

export default memo(SidebarButton)
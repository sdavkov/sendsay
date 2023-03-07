import React, { FC, memo } from 'react'
import './HeaderButton.css'

type Props = {
	title: string;
	active: boolean;
	onClick?: () => void;
	icon?: any;
}

const HeaderButton: FC<Props> = ({ title, active, onClick, icon }) => {
	
	const onClickHandler = () => {
		if (onClick)
			onClick();
	}

	return (
		<div
			role='button'
			onClick={onClickHandler}
			className={`headerButton ${active ? 'active' : ''}`}>
			{!!icon && icon}
			{title}
		</div>
	)
}

export default memo(HeaderButton)
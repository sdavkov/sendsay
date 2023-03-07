import React, { useContext } from 'react'
import { GlobalContext, Mode } from '../../context/GlobalContext'
import HeaderButton from '../UI/HeaderButton/HeaderButton'
import './Header.css'
import eyeIcon from '../../images/eye.svg'
import selectorIcon from '../../images/selector.svg'

const Header = () => {
	const { changeCurrentMode, currentMode } = useContext(GlobalContext);

	return (
		<header className='header'>
			<HeaderButton
				title='Constructor'
				active={currentMode === Mode.Constructor}
				onClick={changeCurrentMode}
				icon={<img src={eyeIcon} alt='Конструктор' />}
			/>
			<HeaderButton
				title='Runtime'
				active={currentMode === Mode.Runtime}
				onClick={changeCurrentMode}
				icon={<img src={selectorIcon}
					alt='Конструктор' />}
			/>
		</header>
	)
}

export default Header
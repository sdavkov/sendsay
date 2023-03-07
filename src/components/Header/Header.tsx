import React, { useContext } from 'react'
import { GlobalContext, Mode } from '../../context/GlobalContext'
import HeaderButton from '../UI/HeaderButton/HeaderButton'
import './Header.css'
import eyeIcon from '../../images/eye.svg'
import eyeActiveIcon from '../../images/eye_active.svg'
import selectorIcon from '../../images/selector.svg'
import selectorActiveIcon from '../../images/selector_active.svg'

const Header = () => {
	const { changeCurrentMode, currentMode } = useContext(GlobalContext);

	return (
		<div className="header">
			<header className='menu'>
				<HeaderButton
					title='Constructor'
					active={currentMode === Mode.Constructor}
					onClick={changeCurrentMode}
					icon={<img src={currentMode === Mode.Constructor ? eyeActiveIcon : eyeIcon} alt='Конструктор' />}
				/>
				<HeaderButton
					title='Runtime'
					active={currentMode === Mode.Runtime}
					onClick={changeCurrentMode}
					icon={<img src={currentMode === Mode.Runtime ? selectorActiveIcon : selectorIcon}
						alt='Конструктор' />}
				/>
			</header>
		</div>
	)
}

export default Header
import React, { useCallback } from 'react'
import HeaderButton from '../UI/HeaderButton/HeaderButton'
import './Header.css'
import eyeIcon from '../../images/eye.svg'
import eyeActiveIcon from '../../images/eye_active.svg'
import selectorIcon from '../../images/selector.svg'
import selectorActiveIcon from '../../images/selector_active.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { changeCurrentMode, Mode } from '../../store/slices/mode'
import { clearConvas } from '../../store/slices/convas'

const Header = () => {
	const currentMode = useSelector<RootState>((state) => state.mode.currentMode)
	const dispatch = useDispatch<AppDispatch>();

	const changeCurrentModeHandler = useCallback(() => {
		dispatch(changeCurrentMode());
		dispatch(clearConvas());
	}, [dispatch])

	return (
		<div className="header">
			<header className='menu'>
				<HeaderButton
					title='Constructor'
					active={currentMode === Mode.Constructor}
					onClick={changeCurrentModeHandler}
					icon={<img src={currentMode === Mode.Constructor ? eyeActiveIcon : eyeIcon} alt='Конструктор' />}
				/>
				<HeaderButton
					title='Runtime'
					active={currentMode === Mode.Runtime}
					onClick={changeCurrentModeHandler}
					icon={<img src={currentMode === Mode.Runtime ? selectorActiveIcon : selectorIcon}
						alt='Конструктор' />}
				/>
			</header>
		</div>
	)
}

export default Header
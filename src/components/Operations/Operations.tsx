import React, { useCallback, useContext } from 'react'
import { GlobalContext, MathOperation, TypeSidebarPanel } from '../../context/GlobalContext'
import SidebarButton from '../UI/SidebarButton/SidebarButton'
import SidebarPanel from '../UI/SidebarPanel/SidebarPanel'
import './Operations.css'

const Operations = () => {

	const { setCurrentMathOperation } = useContext(GlobalContext);

	const divie = useCallback(() => { setCurrentMathOperation(MathOperation.divide) }, [setCurrentMathOperation]);
	const multiply = useCallback(() => { setCurrentMathOperation(MathOperation.multiply) }, [setCurrentMathOperation]);
	const subtract = useCallback(() => { setCurrentMathOperation(MathOperation.subtract) }, [setCurrentMathOperation]);
	const add = useCallback(() => { setCurrentMathOperation(MathOperation.add) }, [setCurrentMathOperation]);

	return (
		<SidebarPanel type={TypeSidebarPanel.operations}>
			<div className='operations'>
				<SidebarButton title='/' onClick={divie} />
				<SidebarButton title='X' onClick={multiply} />
				<SidebarButton title='-' onClick={subtract} />
				<SidebarButton title='+' onClick={add} />
			</div>
		</SidebarPanel>
	)
}

export default Operations
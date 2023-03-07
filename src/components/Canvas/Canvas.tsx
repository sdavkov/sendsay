import React from 'react'
import { useDrop } from 'react-dnd'
import { TypeSidebarPanel } from '../../context/GlobalContext';
import './Canvas.css'

const Canvas = () => {

	const [{ isHover }, ref] = useDrop({
		accept: TypeSidebarPanel.display,
		drop(item) {

		},
		collect: (monitor) => ({
			isHover: monitor.isOver(),
		})
	});

	return (
		<main
			className='canvas'
			ref={ref}
			style={{
				backgroundColor: isHover ? '#F0F9FF' : '#ffffff'
			}}
		>
			<div className="placeholder">
				<div className="title">
					Перетащите сюда
				</div>
				любой элемент <br />
				из левой панели
			</div>
		</main>
	)
}

export default Canvas
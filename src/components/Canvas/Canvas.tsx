import React from 'react'
import { useDrop } from 'react-dnd'
import { addPanel, TypeSidebarPanel } from '../../store/slices/convas';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Digits from '../Digits/Digits';
import Display from '../Display/Display';
import EqualButton from '../EqualButton/EqualButton';
import Operations from '../Operations/Operations';
import './Canvas.css'

const Canvas = () => {
	const panels = useAppSelector((state) => state.convas.panels)
	const dispatch = useAppDispatch();

	const [{ isHover }, ref] = useDrop({
		accept: 'panel',
		canDrop({ type }: { type: TypeSidebarPanel }) {
			if (panels.includes(type))
				return false;
			return true;
		},
		drop({ type }: { type: TypeSidebarPanel }) {
			dispatch(addPanel(type));
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
			{panels.length
				? panels.map(p => {
					switch (p) {
						case TypeSidebarPanel.display:
							return (<Display key={p} />)
						case TypeSidebarPanel.digits:
							return (<Digits key={p} />)
						case TypeSidebarPanel.operations:
							return (<Operations key={p} />)
						case TypeSidebarPanel.equal:
							return (<EqualButton key={p} />)
						default:
							return null;
					}
				})
				: <div className="placeholder">
					<div className="title">
						Перетащите сюда
					</div>
					любой элемент <br />
					из левой панели
				</div>}
		</main>
	)
}

export default Canvas
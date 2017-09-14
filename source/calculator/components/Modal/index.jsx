import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.article.withConfig({
	displayName: 'Overlay'
})`
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(1px) grayscale(50%);
	display: grid;
	grid-template-areas: "modal";
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100000;

	@media screen and (min-width: 640px) {
		grid-template-areas:
			". ..... ."
			". modal ."
			". ..... .";
		grid-template-columns: 1fr 600px 1fr;
		grid-template-rows: minmax(10%, 1fr) auto minmax(10%, 1fr);
	}
`;

const Inner = styled.section.withConfig({
	displayName: 'Inner'
})`
	background-color: #FFFFFF;
	border-radius: 0 0 2px 2px;
	box-shadow: 2px 3px 5px #000000;
	grid-area: modal;
	overflow-x: scroll;
`;

const Header = styled.header.withConfig({
	displayName: 'Header'
})`
	align-items: center;
	background-color: #272727;
	display: flex;
	font-weight: bold;
	position: sticky;
	top: 0;

	& * {
		color: #FFFFFF;
	}
`;

const Title = styled.h3.withConfig({
	displayName: 'Title'
})`
	font-size: 17px;
	margin: 0;
	padding: 5px;
	text-align: center;
	width: 100%;
`;

const Close = styled.button.attrs({
	type: 'button'
}).withConfig({
	displayName: 'Close'
})`
	appearance: none;
	background-color: transparent;
	border-style: none;
	cursor: pointer;
	margin: 0;
`;

const Body = styled.section.withConfig({
	displayName: 'Body'
})`
	padding: 0 5px 5px;
`;

const Modal = ({ children, isOpen, onClose, title }) => {
	if (isOpen) {
		return <Overlay>
			<Inner>
				<Header>
					<Title>{title}</Title>
					<Close onClick={onClose}>close</Close>
				</Header>

				<Body>{children}</Body>
			</Inner>
		</Overlay>;
	} else {
		return null;
	}
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
};

export default Modal;

import React from 'react';
import styled from 'styled-components';

const LinkButtonInner = styled.button.attrs({
	type: 'button'
}).withConfig({
	displayName: 'LinkButtonInner'
})`
	background-color: inherit;
	border-style: none;
	color: #FD885D;

	&:disabled {
		visibility: hidden;
	}

	&:hover {
		color: inherit;
	}
`;

const LinkButton = props => <LinkButtonInner {...props}>remove</LinkButtonInner>;

export default LinkButton;

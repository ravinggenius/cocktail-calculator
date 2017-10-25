import styled from 'styled-components';

const Button = styled.button.attrs({
	className: 'sqs-system-button sqs-editable-button',
	type: 'button'
}).withConfig({
	displayName: 'Button'
})`
	font-size: 15px;

	&&& {
		text-transform: uppercase;
	}
`;

export default Button;

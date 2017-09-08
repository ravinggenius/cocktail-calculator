import styled from 'styled-components';

const NumberInput = styled.input.attrs({
	type: 'number'
}).withConfig({
	displayName: 'NumberInput'
})`
	background-color: transparent;
	border-style: none;
	margin: -5px;
	padding: 5px;
	text-align: right;
	width: 100%;
`;

export default NumberInput;

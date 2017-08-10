import styled from 'styled-components';

const NumberInput = styled.input.attrs({
	type: 'number'
}).withConfig({
	displayName: 'NumberInput'
})`
	border-style: none;
	padding: 0;
	text-align: right;
	width: 100%;
`;

export default NumberInput;

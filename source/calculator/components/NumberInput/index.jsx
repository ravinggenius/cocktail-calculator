import styled from 'styled-components';

const NumberInput = styled.input.attrs({
	type: 'number'
}).withConfig({
	displayName: 'NumberInput'
})`
	border-style: none;
	padding: 0;
	text-align: right;
`;

export default NumberInput;

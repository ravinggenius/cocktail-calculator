import styled, { css } from 'styled-components';

const anchorStyles = css`
	color: #5D5DFD;

	&:hover {
		color: inherit;
	}
`;

const A = styled.a.withConfig({
	displayName: 'A'
})`
	${anchorStyles}
`;

export default A;

export { anchorStyles };

import styled from 'styled-components';

const Section = styled.section.withConfig({
	displayName: 'Section'
})`
	&:not(:first-of-type) {
		border-top: solid 1px #F0F0F0;
		margin-top: 40px;
		padding-top: 40px;
	}
`;

const SectionTitle = styled.h2.withConfig({
	displayName: 'SectionTitle'
})`
`;

export default Section;
export { SectionTitle };

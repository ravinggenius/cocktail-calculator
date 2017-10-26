import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section.withConfig({
	displayName: 'Wrapper'
})`
	&:not(:first-of-type) {
		border-top: solid 1px #F0F0F0;
		margin-top: 40px;
		padding-top: 40px;
	}
`;

const Title = styled.h2.withConfig({
	displayName: 'Title'
})`
`;

const Section = ({ children, className, title }) => <Wrapper {...{ className }}>
	<Title>{title}</Title>

	{children}
</Wrapper>;

Section.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Section;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import P from '../P';

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

const Section = ({ children, description, title }) => <Wrapper>
	<Title>{title}</Title>

	<P>{description}</P>

	{children}
</Wrapper>;

Section.propTypes = {
	children: PropTypes.node.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Section;

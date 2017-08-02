import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.dt.withConfig({
	displayName: 'Title'
})`
	display: inline-block;
	font-weight: bold;
`;

const Description = styled.dd.withConfig({
	displayName: 'Description'
})`
	display: inline-block;
	margin-left: 1ch;
`;

const NoteInner = styled.dl.withConfig({
	displayName: 'NoteInner'
})`
	margin: 0;
`;

const Note = ({ title, description }) => <NoteInner>
	<Title>{title}</Title>
	<Description>{description}</Description>
</NoteInner>;

Note.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Note;

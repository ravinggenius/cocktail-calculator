import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.select.withConfig({
	displayName: 'Container'
})`
	appearance: none;
	background-color: #FEFEAE;
	border: #CCCCCC 1px solid;
	border-radius: 0;
	padding: 5px;

	@media screen and (max-width: 640px) {
		width: 100%;
	}
`;

const Option = ({ text, value }) => <option {...{ value }} key={value}>
	{text}
</option>;

Option.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

const Select = ({ onChange, options, value }) => <Container {...{ onChange, value }}>
	{options.map(option => <Option {...option} />)}
</Container>;

Select.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape(Option.propTypes)
	).isRequired,
	value: PropTypes.string.isRequired
};

export default Select;

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

const Option = ({ text, value }) => <option {...{ value }}>
	{text}
</option>;

Option.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

const Select = ({
	onChange,
	options,
	value: selectedValue
}) => <Container {...{ onChange }} value={selectedValue}>
	{options.map(({ text, value }) => <Option {...{ text, value }} key={value} />)}
</Container>;

Select.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape(Option.propTypes)
	).isRequired,
	value: PropTypes.string.isRequired
};

export default Select;

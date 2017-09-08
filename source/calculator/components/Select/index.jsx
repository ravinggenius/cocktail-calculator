import PropTypes from 'prop-types';
import React from 'react';

const Option = ({ text, value }) => <option {...{ value }} key={value}>
	{text}
</option>;

Option.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

const Select = ({ onChange, options, value }) => <select {...{ onChange, value }}>
	{options.map(option => <Option {...option} />)}
</select>;

Select.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape(Option.propTypes)
	).isRequired,
	value: PropTypes.string.isRequired
};

export default Select;

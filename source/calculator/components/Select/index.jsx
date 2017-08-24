import PropTypes from 'prop-types';
import React from 'react';

const Option = ({ text, value }) => <option {...{ value }} key={value}>
	{text}
</option>;

Option.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

const prefixDataSet = data => Object.entries(data)
	.reduce((memo, [ key, value ]) => Object.assign({ [`data-${key}`]: value }, memo), {});

const Select = ({
	dataSet,
	onChange,
	options,
	value
}) => <select {...{ onChange, value }} {...prefixDataSet(dataSet)}>
	{options.map(option => <Option {...option} />)}
</select>;

Select.defaultProps = {
	dataSet: {}
};

Select.propTypes = {
	dataSet: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape(Option.propTypes)
	).isRequired,
	value: PropTypes.string.isRequired
};

export default Select;

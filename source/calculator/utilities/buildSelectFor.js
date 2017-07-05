import React from 'react';

const renderOption = ({ name, value }) => <option {...{ value }} key={value}>
	{name}
</option>;

const buildSelectFor = (options) => (props) => <select {...props}>
	{options.map(renderOption)}
</select>;

export default buildSelectFor;

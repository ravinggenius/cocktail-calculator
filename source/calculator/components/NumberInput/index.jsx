import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
	type: 'number'
}).withConfig({
	displayName: 'Input'
})`
	background-color: transparent;
	border-style: none;
	margin: -5px;
	padding: 5px;
	text-align: right;
	width: 100%;
`;

class NumberInput extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps({ value }) {
		this.setState(() => ({
			value
		}));
	}

	handleBlur() {
		const { onChange } = this.props;
		const { value } = this.state;

		onChange(value);
	}

	handleChange({ target: { value } }) {
		this.setState(() => ({
			value
		}));
	}

	render() {
		const { readOnly, step } = this.props;
		const { value } = this.state;

		return <Input
			{...{ readOnly, step, value }}
			autoFocus={!readOnly}
			min={0}
			onBlur={this.handleBlur}
			onChange={this.handleChange}
		/>;
	}
}

NumberInput.defaultProps = {
	onChange: () => null,
	readOnly: false,
	step: 1
};

NumberInput.propTypes = {
	onChange: PropTypes.func,
	readOnly: PropTypes.bool,
	step: PropTypes.number,
	value: PropTypes.string.isRequired
};

export default NumberInput;

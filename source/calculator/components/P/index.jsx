import PropTypes from 'prop-types';
import React from 'react';

const P = ({ children }) => <p>{children}</p>;

P.propTypes = {
	children: PropTypes.node.isRequired
};

export default P;

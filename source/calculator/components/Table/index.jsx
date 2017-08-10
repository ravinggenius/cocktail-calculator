import PropTypes from 'prop-types';
import styled from 'styled-components';


const Table = styled.table.withConfig({
	displayName: 'Table'
})`
	border-collapse: collapse;
	width: 100%;
`;

Table.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const Row = styled.tr.withConfig({
	displayName: 'Row'
})`
`;

Row.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const Cell = styled.span`
	border: 1px solid #CCCCCC;
	padding: 5px;
`;


const TH = Cell.withComponent('th').extend.withConfig({
	displayName: 'TH'
})`
	font-weight: bold;

	thead & {
		background-color: #272727;
		color: #FFFFFF;
		text-align: center;
	}

	tbody &,
	tfoot & {
		text-align: left;
	}
`;

TH.propTypes = {
	children: PropTypes.string.isRequired
};


const TD = Cell.withComponent('td').extend.withConfig({
	displayName: 'TD'
})`
	text-align: ${({ type }) => ((type === 'number') ? 'right' : 'left')};
`;

TD.defaultProps = {
	type: 'string'
};

TD.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf([
		'number',
		'string'
	])
};


const THead = styled.thead.withConfig({
	displayName: 'THead'
})`
`;

THead.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const TBody = styled.tbody.withConfig({
	displayName: 'TBody'
})`
`;

TBody.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const TFoot = styled.tfoot.withConfig({
	displayName: 'TFoot'
})`
`;

TFoot.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


export default Table;

export {
 Row,
 TD,
 TH,
 THead,
 TBody,
 TFoot
};

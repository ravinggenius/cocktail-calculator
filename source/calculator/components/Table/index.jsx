import PropTypes from 'prop-types';
import styled from 'styled-components';


const BREAKPOINT = 640;
const GUTTER = 5;


const Table = styled.table.withConfig({
	displayName: 'Table'
})`
	border-collapse: collapse;
	width: 100%;

	@media screen and (max-width: ${BREAKPOINT}px) {
		display: block;
	}
`;

Table.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const Row = styled.tr.withConfig({
	displayName: 'Row'
})`
	@media screen and (max-width: ${BREAKPOINT}px) {
		border: 1px solid #CCCCCC;
		display: block;
	}
`;

Row.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const Cell = styled.span`
	border: 1px solid #CCCCCC;
	padding: ${GUTTER}px;

	@media screen and (max-width: ${BREAKPOINT}px) {
		display: block;
	}
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

	@media screen and (max-width: ${BREAKPOINT}px) {
		border-style: none;
		border-bottom: 1px solid #CCCCCC;
		position: relative;
		padding-left: 50%;

		&::before {
			content: attr(data-label);
			left: ${GUTTER}px;
			position: absolute;
			text-align: left;
			top: ${GUTTER}px;
			width: 45%;
		}
	}
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
	@media screen and (max-width: ${BREAKPOINT}px) {
		display: block;

		& tr {
			position: absolute;
			top: -1000px;
			left: -1000px;
		}
	}
`;

THead.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const TBody = styled.tbody.withConfig({
	displayName: 'TBody'
})`
	@media screen and (max-width: ${BREAKPOINT}px) {
		display: block;
	}
`;

TBody.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element.isRequired
	).isRequired
};


const TFoot = styled.tfoot.withConfig({
	displayName: 'TFoot'
})`
	@media screen and (max-width: ${BREAKPOINT}px) {
		display: block;
	}
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

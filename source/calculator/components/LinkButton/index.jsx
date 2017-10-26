import Button from '../Button';

const LinkButton = Button.withComponent('a').extend.withConfig({
	displayName: 'LinkButton'
})`
	line-height: normal;
`;

export default LinkButton;

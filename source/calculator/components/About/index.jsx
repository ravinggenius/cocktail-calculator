import React from 'react';
import styled from 'styled-components';

import A from '../A';
import Button from '../Button';
import LinkButton from '../LinkButton';
import Modal from '../Modal';
import P from '../P';
import Section from '../Section';
import Small from '../Small';

const CenteredSection = styled(Section).withConfig({
	displayName: 'CenteredSection'
})`
	text-align: center;
`;

const ButtonGroup = styled.div.withConfig({
	displayName: 'ButtonGroup'
})`
	& > * {
		margin: 5px;
	}
`;

const Embed = styled.div.attrs({
	// eslint-disable-next-line jsx-a11y/iframe-has-title, react/prop-types
	children: ({ src, title }) => <iframe {...{ src, title }} allowFullScreen frameBorder="0" />
}).withConfig({
	displayName: 'Embed'
})`
	height: 0;
	margin: 17px auto;
	max-width: 100%;
	overflow: hidden;
	padding-bottom: ${({ height, width }) => (height / width) * 100}%;
	position: relative;

	& embed,
	& iframe,
	& object {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;

class About extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.handleToggleModal = this.handleToggleModal.bind(this);
	}

	handleToggleModal() {
		this.setState(({ isOpen }) => ({
			isOpen: !isOpen
		}));
	}

	render() {
		const { isOpen } = this.state;

		return <CenteredSection title="About This Calculator">
			<ButtonGroup>
				<Button onClick={this.handleToggleModal}>About</Button>
				<LinkButton href="/contact">Send Me Feedback</LinkButton>
			</ButtonGroup>

			<Modal {...{ isOpen }} onClose={this.handleToggleModal} title="Credits">
				<Embed
					src="https://www.youtube-nocookie.com/embed/IlgdwNd1WyM"
					title="Introducing New Live Classes and Cocktail Calculator"
					height={315}
					width={560}
				/>

				<P>Dilution formulas from Dave Arnold&apos;s <A href="https://www.amazon.com/dp/0393089037/_encoding=UTF8?ref=exp_inf_pl_cocktailchemistry">Liquid Intelligence</A>.</P>

				<P>Calculator generously ported by <A href="https://about.me/ravinggenius">Thomas Ingram</A>.</P>

				<Small>calculator code © Thomas Ingram</Small>
				<br />
				<Small>version GIT_DESCRIBE</Small>
			</Modal>
		</CenteredSection>;
	}
}

export default About;

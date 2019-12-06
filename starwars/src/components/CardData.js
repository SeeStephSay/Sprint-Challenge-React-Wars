import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	width: 30%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 5%;
	// border: 1px solid purple;
`;

const Card = styled.div`
	width: 100%;
	background: teal;
	color: snow;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: .8;
	height: 30%;
	// border: 1px solid yellow;
`;

const CardH2 = styled.h2`
	font-family: 'Sulphur Point', sans-serif;
	font-size: 2rem;
	text-shadow: 1px 1px 5px snow;
	color: purple;
`;

const CardH4 = styled.h4`
	font-family: 'Orbitron', sans-serif;
	color: snow;
	text-shadow: 1px 1px 3px purple;
	align-items: center;
	font-size: 1.5rem;
	margin: -1%;
	text-decoration: underline;
`;

const CardText = styled.p`
	font-family: 'Orbitron', sans-serif;
	color: snow;
	max-width: 60%;
	font-size: 1.2rem;
`;

const CardData = (props) => {
	return (
		<div className='cardData'>
			<CardContainer>
				<Card>
					<CardH2>{props.title}</CardH2>
					<CardH4>Stats</CardH4>
					<CardText>Weight: {props.mass}kg</CardText>
					<CardText>Height: {props.height}cm</CardText>
					<CardText>Eye Color: {props.eyecolor}</CardText>
				</Card>
			</CardContainer>
		</div>
	);
};

export default CardData;

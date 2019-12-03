import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 5%;
`;
const ImgCard = styled.div`
	background: black;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: .6;
	width: 30%;
	height: 40%;
`;

const CardH2 = styled.h2`
	font-size: 2rem;
	color: orange;
`;

const CardH4 = styled.h4`font-size: 1.5rem;`;

const CardText = styled.p`
	max-width: 30%;
	font-size: 1.2rem;
`;

const CardData = (props) => {
	return (
		<div>
			<CardContainer>
				<ImgCard>
					<CardH2>{props.title}</CardH2>
				</ImgCard>
			</CardContainer>
		</div>
	);
};

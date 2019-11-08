import React from 'react';
import './StarWars.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const StarWarsCard = (props) => {
	return (
		<div>
			<Card>
				<CardImg top width='100%' src='/assets/318x180.svg' alt='Card image cap' />
				<CardBody className='text-center'>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default StarWarsCard;

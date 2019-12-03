import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardData from './CardData';

const CharacterCard = () => {
	const [ character, setCharacter ] = useState([]);
  console.log(character);
  
  useEffect( () => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log("Lo hicimos! We did it!", response.data.results);
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log("Oh, maaaaan!", error);
  });
}, []);

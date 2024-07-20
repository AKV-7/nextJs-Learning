import React from 'react'
import DrinkList from '../components/DrinkList';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";


const Bar = async () => {

  const response = await fetch(url) ; 


  if(!response.ok){ 
    throw new Error("Failed api req"); 
  }

  const data  = await response.json(); 

  return  <DrinkList drinks = {data.drinks}/> ;
}

export default Bar

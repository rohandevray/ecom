import React from 'react';
import axios from 'axios';
import Home from './Home';
import { useEffect, useState } from 'react';
import Card from './Card';
import "./App.css"
import icon from "./Search.svg"


// b1eb4f838e33414fafeeebed1ca13276
const BASE_URL="https://www.themealdb.com/api/json/v1/1/search.php?s="
const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";

// const pokemon ={
//   "name": "pikachu",
//   "height" : 4,
//   "weight" : 60,
//   "type":"electric",
//   "battlepower":122,
//   "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
// }



function App() {
  const [recipes,setRecipes]=useState([]);
  const [url ,setUrl]=useState(API_URL)
  const [search,setSearch]=useState('');

  const setData= async(dish)=>{
    const response = await fetch(`${BASE_URL}${dish}`);
    const data = await response.json();
    setRecipes(data.meals)
  }

  useEffect(() => {
   setData("chicken");
  }, []);

  return (
    <div className="app">
        <h1>Food Recipes</h1>
        <div className="search">
          <input 
             placeholder="Search for recipes"
             value={search}
             onChange={(e)=> setSearch(e.target.value)}
          />
          <img 
            src={icon}
            alt="search"
            onClick={()=> setData(search)}
          />
      </div>
        {
       recipes?.length > 0 
        ? (
          <div className="container">
           {recipes.map((recipe)=>(
                <Card title={recipe.strMeal}
                 image={recipe.strMealThumb} 
                 instructions={recipe.strInstructions}
                 area={recipe.strArea}
                 link={recipe.strYoutube}
                 />
           ))
           }  
         </div>
        ) : (
           <div className="empty">
              <h2>No recipes found</h2>
           </div>
        )
     }

        
    </div>
  );
}

export default App;

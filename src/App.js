import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv'
import Recipe from './Recipe'
import './App.css';

dotenv.config();


//const API_ID = process.env.API_ID
//const API_KEY = process.env.API_KEY

const API_ID="5b825bb6"
const API_KEY="724259bfbbaa7a4e13d32bd36a7d3ebf"

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearch} />
        <button className="search-button">Submit</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (<Recipe key={recipe.recipe.label} recipe={recipe.recipe} />))}
      </div>
    </div>
  );
}

export default App;

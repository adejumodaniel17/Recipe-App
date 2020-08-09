import React from 'react'
import style from './recipe.module.css'

const Recipe = (props) => (
    <div className={style.recipe}>
        <h1>{props.recipe.label}</h1>
        <ol>
            {props.recipe.ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
        </ol>
        <h3>{parseFloat(props.recipe.calories).toFixed(2)}kcal</h3>
        <img src={props.recipe.image} className={style.image} />
    </div>
)

export default Recipe;
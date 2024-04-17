import React, { useEffect, useState } from 'react'
import Card1 from './Card1';

const MyCard2 = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then(result=>result.json())
        .then(data=>{
            setRecipes(data.recipes);
        })
    })
  return (
    <div className='container d-flex flex-wrap'>
        {recipes.map(recipe=>
            <Card1
                key={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                prepTimeMinutes={recipe.prepTimeMinutes}
                cookTimeMinutes={recipe.cookTimeMinutes}
                servings={recipe.servings}
                difficulty={recipe.difficulty}
                cuisine={recipe.cuisine}
                caloriesPerServing={recipe.caloriesPerServing}
                image={recipe.image}
                
                
                
                
                
                />)
        }
    </div>
  )
}

export default MyCard2
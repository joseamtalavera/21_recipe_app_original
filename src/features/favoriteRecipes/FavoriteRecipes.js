import React from 'react';

import { removeRecipe } from './favoriteRecipesSlice.js';
import {FavoriteButton} from '../../components/FavoriteButton';
import {Recipe} from '../../components/Recipe';


const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

export const FavoriteRecipes = ({favoriteRecipes, dispatch}) => {

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    const createRecipeComponents = (recipe) => {
        return(
            <Recipe 
            recipe={recipe}
            key={recipe.id}>
                <FavoriteButton
                onClickHandler={() => onRemoveRecipeHandler(recipe)}
                icon={unfavoriteIconUrl}>
                Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }

    return (
        <div className='recipes-container'>
            {favoriteRecipes.map(createRecipeComponents)}
        </div>
    );

    
};

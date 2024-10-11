import React from 'react'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const GlobalContext = createContext(null)

export default function GlobalState({children}) {

  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const data = await res.json()
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
        navigate('/')
      }
      
    } catch (e) {
      console.log(e);
      setLoading(false)
      setSearchParam('')
    }
  }

  function handleAddToFavorite(getCurrentId) {
    console.log(getCurrentId);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentId.id);
    if (index === -1) {
      cpyFavoritesList.push(getCurrentId)
    } else {
      cpyFavoritesList.splice(index)
    }
    setFavoriteList(cpyFavoritesList);
    
  }
  console.log(favoritesList, 'favorites');
  
  return (
    <GlobalContext.Provider 
      value={{
        searchParam, 
        loading, 
        recipeList,  
        setSearchParam, 
        handleSubmit, 
        setRecipeDetailsData, 
        recipeDetailsData,
        handleAddToFavorite,
        favoritesList
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

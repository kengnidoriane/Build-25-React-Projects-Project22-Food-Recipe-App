import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../components/context';
import { Heart, Clock, Users, ChefHat } from 'lucide-react';

export default function Details() {
  const {id} = useParams();
  const {recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite} = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await response.json();
        
        if (data?.data) {
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails:', error);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  const isFavorite = favoritesList?.some(item => item.id === recipeDetailsData?.recipe?.id);

  return (
    <div className='container mx-auto py-10 px-4'>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={recipeDetailsData?.recipe?.image_url} 
              alt={recipeDetailsData?.recipe?.title}
              className='w-full h-[500px] object-cover'
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <span className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full font-medium'>
                <ChefHat className="w-5 h-5" />
                {recipeDetailsData?.recipe?.publisher}
              </span>
              
              <h1 className='font-bold text-3xl text-gray-800'>
                {recipeDetailsData?.recipe?.title}
              </h1>
              
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>4 portions</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                isFavorite 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>

            <div className="mt-8">
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Ingrédients</h2>
              <ul className='space-y-4'>
                {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-600">
                      {ingredient.quantity && `${ingredient.quantity} `}
                      {ingredient.unit && `${ingredient.unit} `}
                      {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
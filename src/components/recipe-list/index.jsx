import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

export default function RecipeItem({item}) {
  return (
    <div className='group flex flex-col w-80 overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
      <div className="h-48 overflow-hidden">
        <img 
          src={item?.image_url} 
          alt={item?.title} 
          className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300' 
        />
      </div>
      
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className='px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium'>
            {item?.publisher}
          </span>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>30 min</span>
          </div>
        </div>
        
        <h3 className='font-semibold text-xl text-gray-800 line-clamp-2'>
          {item?.title}
        </h3>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm">4 portions</span>
          </div>
          
          <Link 
            to={`/recipe-item/${item?.id}`} 
            className='inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors'
          >
            Voir la recette
          </Link>
        </div>
      </div>
    </div>
  );
}
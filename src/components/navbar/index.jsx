import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';
import { Search, Home, Heart } from 'lucide-react';

export default function Navbar() {
  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);
  
  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b'>
      <div className='flex justify-between items-center py-4 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 px-4'>
        <h2 className='text-3xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors'>
          <NavLink to='/' className="flex items-center gap-2">
            🍳 CuisineConnect
          </NavLink>
        </h2>
        
        <form onSubmit={handleSubmit} className="relative w-full lg:w-auto">
          <input
            type='text'
            name='search'
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder='Rechercher une recette...'
            className='w-full lg:w-96 bg-gray-50 p-3 pl-12 rounded-lg outline-none border border-gray-200 focus:border-emerald-500 transition-all'
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </form>
        
        <ul className='flex gap-6 items-center'>
          <li>
            <NavLink 
              to={'/'} 
              className={({isActive}) => 
                `flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600 font-medium' : ''}`
              }
            >
              <Home className="w-5 h-5" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/favorites'} 
              className={({isActive}) => 
                `flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600 font-medium' : ''}`
              }
            >
              <Heart className="w-5 h-5" />
              <span>Favoris</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
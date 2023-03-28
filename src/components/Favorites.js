import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

function Favorites() {
  const favorites = useSelector(state => state.favorites)

  return (
    <div className='favorites-container'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-8 ml-4' onClick={() => (window.location.href = '/')}>
        Home
      </button>
      <h1 className='text-2xl font-bold mb-4'>Favorites</h1>
      {favorites.length === 0 && <p className='text-gray-500'>No favorites yet.</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {favorites.map(photo => (
          <Photo key={photo.id} photo={photo} isFavorite={true} />
        ))}
      </div>
    </div>
  )
}

export default Favorites

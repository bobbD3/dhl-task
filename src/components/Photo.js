import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../actions'

function Photo({ photo, isFavorite }) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const isAlreadyFavorite = favorites.some(fav => fav.id === photo.id)

  const handleFavoriteClick = () => {
    if (!isAlreadyFavorite) {
      dispatch(addFavorite(photo))
    }
  }

  return (
    <div className='photo-container flex justify-center items-center '>
      <div className='relative'>
        <img src={photo.url} alt={photo.title} className='w-full' />
        {!isFavorite && (
          <button onClick={handleFavoriteClick} className='absolute bottom-0 left-0 w-full py-2 bg-white opacity-0 hover:opacity-100 transition-opacity'>
            {isAlreadyFavorite ? 'Already a favorite' : 'Add to favorites'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Photo

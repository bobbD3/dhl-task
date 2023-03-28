import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../actions'
import Photo from './Photo'

function Gallery() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const photos = useSelector(state => state.photos)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchPhotos(page))
  }, [dispatch, page])

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <div className='gallery-container bg-gray-200 min-h-screen'>
      <div className='flex justify-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-8 ml-4' onClick={() => (window.location.href = '/favorites')}>
          Favorites
        </button>
      </div>
      <h1 className='text-3xl font-bold text-center mb-10'>Gallery</h1>
      {loading && <p className='text-center'>Loading...</p>}
      {!loading && (
        <div className='grid grid-cols-10 gap-4'>
          {photos.map(photo => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      )}
      {!loading && page <= 20 && (
        <div className='flex justify-center'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded mt-8' onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery

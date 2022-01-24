import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['simpsons'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <div className='form-container'>
        <AddCategory setCategories={setCategories} categories={categories} />
      </div>
      <hr />
      <ul className='grid-container'>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ul>

    </>
  )
}

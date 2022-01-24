import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs( category )
  

  return (<>

    { loading && <Spinner /> }
    <h3 className='category'> {category} </h3>

    <div className='card-grid'>
      {
        data.map(gif => (
          <GifGridItem
            key={gif.id}
            {...gif}
          />
        ))
      }
    </div>
  </>
  )
}

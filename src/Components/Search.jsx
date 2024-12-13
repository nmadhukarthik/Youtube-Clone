import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi'
import Sidebar from './Sidebar.jsx'
import Searchcard from './Searchcard.jsx'

const Search = () => {

  const [result, setResult] = useState()
  const { searchQuery } = useParams()

  useEffect(() => {
    fetchSearchResults()
  }, [searchQuery])

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`)
      .then(({ contents }) => { setResult(contents) })
  }



  return (
    <div className=''>
      <div className=' flex flex-row mt-24 h-[calc(100%-56px)]'>

        <Sidebar />


        <div className=' grow h-[calc(100vh-6.625rem)]  w-[180%] overflow-y-scroll '>
          <div className='grid grid-cols-1 gap-2 p-2'>
            {result?.map((item, index) => {
              if (item?.type !== "video") return false
              return <Searchcard key={index} video={item?.video} />
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search
import React from 'react'

const Horizontalbar = () => {
    const categories = [
        "All", "Telugu cinema", "Thrillers", "News", "Music",
        "Javascript", "Podcasts","Mixes", "Cooking", "Gardening",
        "Frying", "Spice", "Live", "Algorithms", "Songs"
    ]
  return (
    <div className='flex overflow-x-scroll scrollbar-hide px-3'>
        <div className='flex space-x-4'>
        {categories.map((item) => {
            return (
                <div key={item} className=' mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-1 font-medium text-gray-700 cursor-pointer'> 
                 {item}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Horizontalbar
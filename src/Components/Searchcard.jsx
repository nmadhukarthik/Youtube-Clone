import React from 'react'
import Time from '../Loader/Time'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { PiCheckCircleFill } from 'react-icons/pi'

const Searchcard = ({video}) => {
    console.log(video)
  return (
    <div>
        <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-row'>
          {/* thumbnail and duration */}
          <div className=''>
            <img className='h-full w-full min-w-[384px] max-w-[400px]  object-cover rounded-lg hover:rounded-none duration-200'
              src={video?.thumbnails[0]?.url}
              alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo and title */}
          <div className='flex mt-3 space-x-2'>
            <div className='flex items-start'>
              
            </div>
            <div>
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}
              </span>
              
              {/* views and published datetime */}
              <div className='flex text-gray-500 text-[12px]'>
                  <span>{`${abbreviateNumber(video?.stats?.views,2)}`} views </span>
                  <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'> . </span>
                  <span>{video?.publishedTimeText}</span>
              </div>
              <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>
              <div className='flex h-9 w-9 rounded-full overflow-hidden border m-2'>
                {/* <Avatar src={video?.author?.avatar[0].url}  size='32' round={true} /> */}
                <img className='h-full w-full rounded-full overflow-hidden'
                  src={video?.author?.avatar[0].url} alt="" />
              </div>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<PiCheckCircleFill className='text-gray-600 ml-1 text-[12px] ' />)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Searchcard
import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../Loader/Time'
import { PiCheckCircleFill } from "react-icons/pi";
import { abbreviateNumber } from 'js-abbreviation-number';

const SuggestedVideo = ({ video }) => {
    return (
        <div>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex mb-3 '>
                    {/* thumbnail and duration */}
                    <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden'>
                        <img className='h-full w-full rounded-lg'
                            src={video?.thumbnails[0]?.url}
                            alt="" />
                        {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
                    </div>
                    {/* channel logo and title */}
                    <div className='flex mt-3 space-x-2'>
                        {/* <div className='flex items-start'>
                            <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
                                {/* <Avatar src={video?.author?.avatar[0].url}  size='32' round={true} /> */}
                                {/* <img className='h-full w-full rounded-full overflow-hidden'
                                    src={video?.author?.avatar[0].url} alt="" />
                            </div>
                        </div> */} 
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className='text-sm font-bold line-clamp-2'>
                                {video?.title}
                            </span>
                            <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<PiCheckCircleFill className='text-gray-600 ml-1 text-[12px] lg:text-[10px] xl:text-[12px]' />)}
                            </span>
                            {/* views and published datetime */}
                            <div className='flex text-gray-500 text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden'>
                                <span>{`${abbreviateNumber(video?.stats?.views, 2)}`} views </span>
                                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'> . </span>
                                <span className="truncate">{video?.publishedTimeText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SuggestedVideo
import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GiAerialSignal } from "react-icons/gi";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiMiniFire } from "react-icons/hi2";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive, CgPlayListSearch } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { MdOutlinedFlag } from "react-icons/md";
import { useUtils } from '../context/UtilsContext';


function Sidebar() {

    const {isSidebar,setIsSidear,mobileShow,setMobileshow} = useUtils()
    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                {
                    id: 1,
                    name: "Home",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "Shorts",
                    icon: <SiYoutubeshorts />
                },
                {
                    id: 3,
                    name: "Subscriptions",
                    icon: <MdOutlineSubscriptions />
                }
            ]
        },
        {
            groupName: "You",
            groupItems: [
                {
                    id: 1,
                    name: "Your Channel",
                    icon: <CgProfile />
                },
                {
                    id: 2,
                    name: "History",
                    icon: <MdHistory />
                },
                {
                    id: 3,
                    name: "Playlists",
                    icon: <CgPlayListSearch />
                },
                {
                    id: 4,
                    name: "Your videos",
                    icon: <BiVideo />
                },
                {
                    id: 5,
                    name: "Watch later",
                    icon: <MdOutlineWatchLater />
                },
                {
                    id: 6,
                    name: "Liked videos",
                    icon: <BiSolidLike />
                }
            ]
        },
        {
            groupName: "Explore",
            groupItems: [
                {
                    id: 1,
                    name: "Trending",
                    icon: <HiMiniFire />
                },
                {
                    id: 2,
                    name: "Music",
                    icon: <IoMdMusicalNote />
                },
                {
                    id: 3,
                    name: "Movies",
                    icon: <PiFilmSlateLight />
                },
                {
                    id: 4,
                    name: "Live",
                    icon: <GiAerialSignal />
                },
                {
                    id: 5,
                    name: "Gaming",
                    icon: <IoGameControllerOutline />
                },
                {
                    id: 6,
                    name: "News",
                    icon: <FaRegNewspaper />
                },
                {
                    id: 7,
                    name: "Sports",
                    icon: <TfiCup />
                },
                {
                    id: 8,
                    name: "Learning",
                    icon: <PiLightbulbLight />
                },
                {
                    id: 9,
                    name: "Fashion & Beauty",
                    icon: <SiStylelint />
                },
                {
                    id: 10,
                    name: "Podcasts",
                    icon: <MdPodcasts />
                }
            ]
        },
        {
            groupName: "More from Youtube",
            groupItems: [
                {
                    id: 1,
                    name: "Youtube Premium",
                    icon: <FaYoutube />
                },
                {
                    id: 2,
                    name: "Youtube Studio",
                    icon: <SiYoutubestudio />
                },
                {
                    id: 3,
                    name: "Youtube Music",
                    icon: <SiYoutubemusic />
                },
                {
                    id: 4,
                    name: "Youtube Kids",
                    icon: <SiYoutubekids />
                }
            ]
        },
        {
            groupName: "",
            groupItems: [
                {
                    id: 1,
                    name: "Settings",
                    icon: <IoSettingsOutline />
                },
                {
                    id: 2,
                    name: "Report History",
                    icon: <MdOutlinedFlag />
                },
                {
                    id: 3,
                    name: "Help",
                    icon: <IoHelpCircleOutline />
                },
                {
                    id: 4,
                    name: "Send Feedback",
                    icon: <GoReport />
                }

            ]
        }
    ]

    return (
        <>
          {/* className={`${mobileShow 
                ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%] " 
                : "hidden h-[calc(100vh-6.625rem)] w-[18%]"
                } xl:static xl:block px-2 lg:px-6 overflow-y-scroll scrollbar-hide scrollbar-thin`}></> */}
            <div className='px-6 w-[37%] h-[calc(100vh-6.625rem)] overflow-y-scroll scrollbar-hide '>
            {/* home part */}
            <div className='items-center space-y-3 '>
                {sidebarItems.map((group) => {
                    return (
                        <div className='mb-5'>
                            <h1 className='font-bold'>{group.groupName}</h1>
                            { group.groupItems.map((item) => (
                                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1' >
                                        <div className='text-sm cursor-pointer'>{item.icon}</div>
                                        <span className='text-sm cursor-pointer'>{item.name}</span>
                                    </div>
                            ))
                            }
                        </div>
                    )
                })
                }
                {/* <br /> */}
                <hr />
            </div>
            <br />
            <span className='text-xs font-semibold text-gray-600'>About Press Copyright <br />Contact us Creators <br />
                Advertise Developers <br /><br />
                <p>Terms PrivacyPolicy & Safety <br />How YouTube works <br />Test new features</p></span>
            <br />
            <p className='text-xs text-gray-400'> © 2024 Google LLC </p>
        </div>
        </>
        


    )
}

export default Sidebar
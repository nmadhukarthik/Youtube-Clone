import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

import YTlogo from "../../public/YTlogo.png";
import icon from "../../public/icon.png";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

function Navbar() {
    const { isSidebar, setIsSidebar, mobileShow, setMobileshow } = useUtils();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        console.log({ isSidebar, mobileShow });
    }, [isSidebar]);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };

    const handleSidebar = () => {
        if (window.innerWidth <= 1200) {
            setIsSidebar(!isSidebar);
            setMobileshow(!mobileShow);
        }

        setIsSidebar(!isSidebar);
    };

    return (
        <div className="flex justify-between items-center px-6 py-2 fixed top-0 w-[100%] bg-white">
            <div className="flex  items-center sm:w-auto space-x-4">
                <RxHamburgerMenu
                    className="text-xl cursor-pointer"
                    onClick={handleSidebar}
                />
                <img
                    src={YTlogo}
                    alt="YTlogo"
                    className="w-28 cursor-pointer"
                />
            </div>

            <div className=" flex sm:w-auto items-center ">
                <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                </div>
                <button
                    className="px-3 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full sm:w-auto"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <CiSearch size={"24px"} />
                </button>
                <FaMicrophone
                    size={"40px"}
                    className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300 duration-200 sm:w-auto"
                />
            </div>

            <div className=" flex items-center sm:w-auto space-x-5">
                <MdOutlineVideoCall className="text-2xl sm:w-auto" />
                <FaRegBell className="text-2xl sm:w-auto" />
                <Avatar
                    src={icon}
                    size="32"
                    round={true}
                    className="sm:w-auto"
                />
            </div>
        </div>
    );
}
export default Navbar;

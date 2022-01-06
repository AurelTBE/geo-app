import React, {useState} from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

interface Props {
    
}

const SearchTab = () => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            <div className="hidden h-12 bg-gray-200 shadow xl:w-full xl:mx-0 sm:block">
                <ul className="flex px-5 border-b">
                    <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm border-neutral-800 pt-3 rounded-t text-neutral-800 mr-6" : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-neutral-800 cursor-pointer"}>
                        <div className="flex items-center mb-3">
                            <span className="ml-1 font-normal">SEARCH BUILDER</span>
                        </div>
                        {activeStatus == 1 && <div className="w-full h-1 bg-neutral-800 rounded-t-md" />}
                    </li>
                    <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm border-neutral-800 pt-3 rounded-t text-neutral-800 mr-6" : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-neutral-800 cursor-pointer"}>
                        <div className="flex items-center mb-3">
                            <span className="ml-1 font-normal">SAVED SEARCHES</span>
                        </div>
                        {activeStatus == 2 && <div className="w-full h-1 bg-neutral-800 rounded-t-md" />}
                    </li>
                    <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm border-neutral-800 pt-3 rounded-t text-neutral-800 mr-6" : "text-sm text-gray-600 py-3 flex items-center mr-6 hover:text-neutral-800 cursor-pointer"}>
                        <div className="flex items-center mb-3">
                            <span className="ml-1 font-normal">UPLOAD CSV</span>
                        </div>
                        {activeStatus == 3 && <div className="w-full h-1 bg-neutral-800 rounded-t-md" />}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchTab

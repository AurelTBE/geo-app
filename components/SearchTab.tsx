import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

interface Props {
    
}

const SearchTab = () => {
    return (
        <div className="flex flex-row">
            <nav className='px-6 py-5'>
                <a href="" className='pr-4'>SEARCH BUILDER</a>
                <a href="" className='pr-4'>SAVED SEARCHES</a>
                <a href="" className='pr-4'>UPLOAD CVS</a>
            </nav>
        </div>
    )
}

export default SearchTab

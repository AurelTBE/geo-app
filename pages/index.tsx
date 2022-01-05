import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchTab from '../components/SearchTab'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <div className="w-[50%] h-screen shadow-2xl bg-gray-200">
        <SearchTab />
      </div>
      <div className="w-[50%] h-screen bg-slate-300">
        <div className="flex text-white">Coucou</div>
      </div>
    </div>


  )
}

export default Home

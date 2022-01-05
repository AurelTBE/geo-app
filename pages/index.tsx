import type { NextPage } from 'next'
import SearchTab from '../components/SearchTab'

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

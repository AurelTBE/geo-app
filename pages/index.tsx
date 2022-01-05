import type { NextPage } from 'next'
import SearchTab from '../components/SearchTab'

const Home: NextPage = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-[40%] h-screen shadow-lg bg-gray-200">
        <SearchTab />
      </div>
      <div className="flex felx-col w-[60%] h-screen bg-gray-400">
        <div className="flex text-white">Coucou</div>
      </div>
    </div>
  )
}

export default Home

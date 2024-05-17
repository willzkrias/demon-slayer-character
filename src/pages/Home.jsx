import React from 'react'
import waves from '../assets/waves.svg'
import FlipCard from '../components/FlipCard'
import {MdElectricBolt, MdFoggy} from 'react-icons/md'
import {GiWhirlwind, GiSnake} from 'react-icons/gi'
import ReactSelect from 'react-select'
import muichiro from '../assets/Muichiro.png'
import sanemi from '../assets/sanemi.png'
import obanai from '../assets/obanai.png'

const Home = () => {
  return (
    <>
    <div className="w-full">
      <div className="w-full relative">
        <img src="https://wallpapercave.com/wp/wp5113887.jpg"
        alt="DemonSlayer Core"
        className='w-full object-cover object-center h-[25rem] md:h-[50rem]' />
      </div>
      <div className="w-full relative">
        <img src={waves} alt="waves" className='absolute bottom-0 left-0 w-full max-w-full' />
      </div>
      <div className="h-auto">
        <h1 className='text-xl md:text-4xl text-center font-semibold flex items-center justify-center'>Demon Slayer Character</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center align-middle mt-5 mb-14 w-full">
        <FlipCard 
        img={sanemi}
          backComponent={
            <div className='relative h-full font-bold'>
              <div className='bg-green-500 w-full h-full rounded-lg overflow-hidden absolute top-0'
                style={{
                  clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)'
                }}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <GiWhirlwind className='w-24 h-24 text-green-300'/>
                  <h1 className="text-center">
                    Sanemi
                  </h1>
                </div>
                </div>
          }
          />
        <FlipCard
        img={muichiro}
          backComponent={
            <div className='relative h-full font-bold'>
              <div className='bg-teal-500 w-full h-full rounded-lg overflow-hidden absolute top-0'
                style={{
                  clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)'
                }}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <MdFoggy className='w-24 h-24 text-teal-300'/>
                  <h1 className="text-center">
                    Muichiro
                  </h1>
                </div>
                </div>
          }
          />
        <FlipCard 
        img={obanai}
          backComponent={
            <div className='relative h-full font-bold'>
              <div className='bg-slate-400 w-full h-full rounded-lg overflow-hidden absolute top-0'
                style={{
                  clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)'
                }}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <GiSnake className='w-24 h-24' color='silver'/>
                  <h1 className="text-center">
                    Obanai
                  </h1>
                </div>
                </div>
          }
          />
        </div>
      </div>

      <h1 className="text-xl md:text-4xl text-center font-semibold flex item-center justify-center z-10">
        Find Your Character
      </h1>
      <div className="flex justify-center my-5 mb-[5rem]">

      <ReactSelect className='w-full md:w-1/2 p-2 rounded-md' placeholder='Choose Your Character'/>
      </div>
    </div>
    </>
  )
}

export default Home

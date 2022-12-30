import React from 'react'
import PokeAll from '../organisms/PokeAll';
import PokeInfo from '../organisms/PokeInfo';
import "./Page.css"

const Page = () => {
  
  return (
   <div className='poke'>
    <div className='poke-left'>
        <PokeAll/>
    </div>
    <div className='poke-right'>
        <PokeInfo/>
    </div>
   </div>
  )
}

export default Page
import React from 'react'
import axios from 'axios';
import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import "./PokeInfo.css"

const PokeInfo = () => {
  const [pokeDataInfo,setPokeDataInfo] = useState<any>();
  const [pokeInput,setPokeInput] = useState<string>("");
  const [pokeSearch,setPokeSearch] = useState<string>("1");
  const [anotherColor,setAnotherColor] = useState<boolean>(false);
  
  useEffect(()=>{
   const fetchPokeDataInfo = async() =>{
    try{
     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`);
     let data = await res.data;
     setPokeDataInfo(data)
    }
    catch{
      window.alert("正しい値を入力してください")
    }
   }
   fetchPokeDataInfo()
  },[pokeSearch])

  const handlePokeChange = (e:any) =>{
    setPokeInput(e.target.value)
  }
  const searchPoke = (e:any) =>{
    e.preventDefault();
    setPokeSearch(pokeInput);
  }
  const changePokeColor = () =>{
    setAnotherColor(!anotherColor)
  }
  

  return (
  <div className='poke-search'>
    <div className='poke-search-input'>
      <input type="text" placeholder='number or name' onChange={handlePokeChange}/>
      <button onClick={searchPoke}>Search</button>
    </div>
    {pokeDataInfo &&
    <div className='poke-info'>
      <div className='poke-img'>
        {anotherColor ? <img src={pokeDataInfo.sprites.front_shiny} width={180} height={180}/>  :
        <img src={pokeDataInfo.sprites.front_default} width={180} height={180}/>}
        {anotherColor ? <img src={pokeDataInfo.sprites.back_shiny} width={180} height={180}/> :
        <img src={pokeDataInfo.sprites.back_default} width={180} height={180}/>}
      </div>
      <div className='poke-buttons'>
       <div className='poke-button'>
        <button onClick={changePokeColor}>color</button>
       </div>
       <div className='poke-button'>
        {pokeDataInfo.types.map((item:any)=>{
           return(
            <p>{item.type.name}</p>
           )
        })}
       </div>
       <div className='poke-button'>
        {pokeDataInfo.abilities.map((item:any)=>{
           return(
           <p>{item.ability.name}</p>
           )
        })}
       </div>
      </div>
    </div>
    }
  </div>
  )
}

export default PokeInfo
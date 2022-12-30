import axios from 'axios';
import React from 'react'
import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { poke } from '../../types';
import "./PokeAll.css"

const PokeAll = () => {
  const [loadUrl,setLoadUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [loading,setLoading] = useState<boolean>(true);
  const[allPokemons, setAllPokemons] = useState<any[]>([]);
  useEffect(()=>{
   const getUrl = async() =>{
     const res = await axios.get(loadUrl);
     setLoading(false);
     loadPokemon(res.data.results);
   }
   getUrl();
  },[])

  const loadPokemon = async(data:poke[]) =>{
    let _pokemonData = await Promise.all(
        data.map((pokemon)=>{
          let pokemonRecord = axios.get(pokemon.url);
          return pokemonRecord;
        })
    )
    setAllPokemons(_pokemonData);
  }

  

  return (
    <>
        {allPokemons.map((item)=>{
          return(
            <div className="poke-card">
             <p>{item.data.name}</p>
             <div className='poke-card-img'>
                <img src={item.data.sprites.front_default}/>
             </div>
             <div className='poke-card-search'>
                <p>No{item.data.id}</p>
             </div>
            </div>
          )
        })}
    </>
  )
}

export default PokeAll
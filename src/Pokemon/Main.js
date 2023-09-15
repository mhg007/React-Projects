import React,{useEffect,useState} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import  Paginations  from './Paginations';

export default function Main(){
    const [pokemon,setPokemon] = useState([])
    const [currentPageUrl,setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [loading,setLoading] = useState(true)
    const [nextPageUrl,setNextPageUrl] = useState()
    const [prevPageUrl,setPrevPageUrl] = useState()
  
    useEffect(()=>{
      setLoading(true)
      let cancel
      axios.get(currentPageUrl,{
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p=>p.name))
      })
  
      return ()=>cancel()
    },[currentPageUrl])
  
    if(loading)return "Loading..."
  
    function gotoNextPage(){
      setCurrentPageUrl(nextPageUrl)
    }
    function gotoPrevPage(){
      setCurrentPageUrl(prevPageUrl)
    }
  
    return(
        <>
        <PokemonList pokemon={pokemon}/>
      <Paginations 
        gotoNextPage={nextPageUrl ? gotoNextPage:null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage:null}
      />
        </>
    )
}
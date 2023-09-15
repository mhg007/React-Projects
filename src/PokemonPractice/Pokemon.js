import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Paginations from "./Pagination";

const Pokemon = () => {
    const [pokemon,setPokemon] = useState([])
    const [currentPageUrl,setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [loading,setLoading] = useState(true)
    const [nextPageUrl,setNextPageUrl] = useState()
    const [prevPageUrl,setPrevPageUrl] = useState()

    useEffect(()=>{
        setLoading(true)
        let cancel
        axios
        .get(currentPageUrl,{
            cancelToken: new axios.CancelToken(c=> cancel=c)
        })
        .then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p=>p.name))
        })

        return ()=>cancel()

    },[currentPageUrl])

    if(loading) return "Loading..."

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    return(
        <>
            <PokemonList pokemon={pokemon} />
            <Paginations
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
        </>
    )
}
export default Pokemon;
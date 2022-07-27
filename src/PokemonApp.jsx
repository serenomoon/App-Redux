import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const {page, isLoading, pokemons} = useSelector(state => state.pokemons)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( getPokemons() )
  
  }, [])

  return (
    <>
    <h1>PokemonApp</h1>

    <hr/>
    <span> Loading: { isLoading ? 'True' : 'False' } </span>

    <ul>
        {pokemons.map((poke, i) => {
          console.log(poke)
          return(
          // <img key={i} src={}/>
          <li key={i}>{poke.name}</li>)
        })}
    </ul>

    <button
      disabled={ isLoading }
      onClick= { () => dispatch( getPokemons(page) )}
    >
      Next
    </button>
    </>
  )
}

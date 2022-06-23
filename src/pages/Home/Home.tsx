import { useState } from "react"
import PokemonForm from "../../components/PokemonForm"
import { FormData } from "../../components/PokemonForm/PokemonForm"
import PokemonSearch from "../../components/PokemonSearch"
import PokemonTable from "../../components/PokemonTable"
import LoadingDots from "../../components/ui/LoadingDots"
import {
  useCreatePokemon,
  useDeletePokemon,
  useReadPokemons,
  useUpdatePokemon,
} from "../../hooks/usePokemons"
import { Pokemon } from "../../services/pokemons"
import s from "./Home.module.css"

const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [isShowForm, setIsShowForm] = useState(false)
  const [search, setSearch] = useState("")

  const { data: pokemons } = useReadPokemons()
  const { mutate: createPokemon, status: createPokemonStatus } = useCreatePokemon()
  const { mutate: updatePokemon, status: updatePokemonStatus } = useUpdatePokemon()
  const { mutate: deletePokemon } = useDeletePokemon()

  const getFilteredPokemons = (pokemons: Pokemon[]) => {
    if (search) {
      return pokemons?.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    return pokemons
  }

  const handleSendForm = (data: FormData, handleReset: () => void) => {
    if (!pokemon) {
      createPokemon(
        { ...data, idAuthor: 1 },
        {
          onSuccess: () => {
            handleReset()
          },
        }
      )
    } else {
      updatePokemon(
        { pokemonId: pokemon.id, pokemonUpdate: { ...data, idAuthor: 1 } },
        {
          onSuccess: () => {
            handleReset()
          },
        }
      )
    }
  }

  return (
    <main className={s.root}>
      {(isShowForm || pokemon) && (
        <PokemonForm
          pokemon={pokemon}
          setPokemon={setPokemon}
          setIsShowForm={setIsShowForm}
          onSendForm={handleSendForm}
          isLoading={[createPokemonStatus, updatePokemonStatus].includes("loading")}
        />
      )}
      <br />
      <PokemonSearch setIsShowForm={setIsShowForm} setSearch={setSearch} />
      <br />
      {pokemons ? (
        <PokemonTable
          pokemons={!search ? pokemons : getFilteredPokemons(pokemons)}
          setPokemon={setPokemon}
          onDelete={deletePokemon}
        />
      ) : (
        <div className={s.loading}>
          <LoadingDots />
        </div>
      )}
    </main>
  )
}

export default Home

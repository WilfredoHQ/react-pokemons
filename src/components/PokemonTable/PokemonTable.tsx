import { Dispatch, SetStateAction } from "react"
import { PenIcon, TrashIcon } from "../../assets/icons"
import { Pokemon } from "../../services/pokemons"
import s from "./PokemonTable.module.css"

interface PokemonTableProps {
  pokemons: Pokemon[]
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>
  onDelete: Dispatch<number>
}

const PokemonTable = ({ pokemons, setPokemon, onDelete }: PokemonTableProps) => {
  return (
    <section className={s.root}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .map((pokemon, index) => (
              <tr key={index}>
                <td>{pokemon.name}</td>
                <td>
                  <img className={s.image} src={pokemon.image} alt={pokemon.name} />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>
                  <button onClick={() => setPokemon(pokemon)} className={s.update}>
                    <PenIcon />
                  </button>
                  <button onClick={() => onDelete(pokemon.id)} className={s.delete}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </section>
  )
}

export default PokemonTable

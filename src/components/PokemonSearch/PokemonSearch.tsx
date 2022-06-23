import { Dispatch, SetStateAction } from "react"
import { PlusIcon, SearchIcon } from "../../assets/icons"
import Button from "../ui/Button"
import Input from "../ui/Input"
import s from "./PokemonSearch.module.css"

interface PokemonSearchProps {
  setSearch: Dispatch<string>
  setIsShowForm: Dispatch<SetStateAction<boolean>>
}

const PokemonSearch = ({ setSearch, setIsShowForm }: PokemonSearchProps) => {
  return (
    <section className={s.root}>
      <div className={s.search}>
        <Input
          label="Listado de Pokemon"
          placeholder="Buscar"
          onChange={e => setSearch(e.target.value)}
        />
        <SearchIcon className={s.icon} />
      </div>
      <Button onClick={() => setIsShowForm(true)} className={s.action}>
        <PlusIcon /> Nuevo
      </Button>
    </section>
  )
}

export default PokemonSearch

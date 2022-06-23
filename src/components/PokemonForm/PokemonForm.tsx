import { Dispatch, SetStateAction, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AddIcon, CloseIcon } from "../../assets/icons"
import { Pokemon } from "../../services/pokemons"
import Button from "../ui/Button"
import Input from "../ui/Input"
import LoadingDots from "../ui/LoadingDots"
import Select from "../ui/Select"
import Slider from "../ui/Slider"
import s from "./PokemonForm.module.css"

export interface FormData {
  name: string
  image: string
  attack: number
  defense: number
  hp: number
  type: string
}

interface PokemonFormProps {
  pokemon: Pokemon | null
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>
  setIsShowForm: Dispatch<SetStateAction<boolean>>
  onSendForm: (data: FormData, callbackFn: () => void) => void
  isLoading: boolean
}

const PokemonForm = ({
  pokemon,
  setPokemon,
  setIsShowForm,
  onSendForm,
  isLoading,
}: PokemonFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setFocus,
  } = useForm<FormData>()

  const handleReset = () => {
    setFocus("name")
    setPokemon(null)
    reset()
    setIsShowForm(false)
  }

  const onSubmit: SubmitHandler<FormData> = data => {
    onSendForm(data, handleReset)
  }

  useEffect(() => {
    if (pokemon) {
      setValue("name", pokemon.name)
      setValue("image", pokemon.image)
      setValue("type", pokemon.type)
      setValue("hp", pokemon.hp)
      setValue("attack", pokemon.attack)
      setValue("defense", pokemon.defense)
      setFocus("name")
    }
  }, [pokemon])

  return (
    <section className={s.root}>
      <h5 className={s.title}>Nuevo Pokemon</h5>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form} noValidate>
        <Input
          label="Nombre"
          placeholder="Charizard"
          error={!!errors.name}
          required
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="Imagen"
          placeholder="https://picsum.photos/200/300"
          error={!!errors.image}
          required
          {...register("image", {
            required: true,
          })}
        />
        <Select
          label="Tipo"
          error={!!errors.type}
          required
          {...register("type", {
            required: true,
          })}
        >
          {[
            "Normal",
            "Fire",
            "Water",
            "Grass",
            "Flying",
            "Fighting",
            "Poison",
            "Electric",
            "Ground",
            "Rock",
            "Psychic",
            "Ice",
            "Bug",
            "Ghost",
            "Steel",
            "Dragon",
            "Dark",
            "Fairy",
          ].map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </Select>
        <Slider
          label="HP"
          min={0}
          max={100}
          {...register("hp", {
            required: true,
          })}
        />
        <Slider
          label="Ataque"
          min={0}
          max={100}
          {...register("attack", {
            required: true,
          })}
        />
        <Slider
          label="Defensa"
          min={0}
          max={100}
          {...register("defense", {
            required: true,
          })}
        />
        <div className={s.actions}>
          <Button type="submit" disabled={isLoading} className={s.action}>
            <AddIcon /> Guardar {isLoading && <LoadingDots />}
          </Button>
          <Button type="button" onClick={() => handleReset()} className={s.action}>
            <CloseIcon /> Cancelar
          </Button>
        </div>
      </form>
    </section>
  )
}

export default PokemonForm

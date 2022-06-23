import { forwardRef, InputHTMLAttributes, Ref } from "react"
import s from "./Slider.module.css"

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Slider = (
  { label, min, max, required, ...rest }: SliderProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label>
      {label && (
        <span className={s.label}>
          {label}
          {required && " *"}
        </span>
      )}
      <div className={s.inputContainer}>
        <span>{min}</span>
        <input
          className={s.input}
          type="range"
          min={min}
          max={max}
          required={required}
          ref={ref}
          {...rest}
        />
        <span>{max}</span>
      </div>
    </label>
  )
}

export default forwardRef(Slider)

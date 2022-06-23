import clsx from "clsx"
import { forwardRef, InputHTMLAttributes, Ref } from "react"
import s from "./Input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

const Input = (
  { label, error, required, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label className={clsx(s.root, error && s.error)}>
      {label && (
        <span className={s.label}>
          {label}
          {required && " *"}
        </span>
      )}
      <input className={s.input} required={required} ref={ref} {...rest} />
    </label>
  )
}

export default forwardRef(Input)

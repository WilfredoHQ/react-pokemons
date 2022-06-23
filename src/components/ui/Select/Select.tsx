import clsx from "clsx"
import { forwardRef, Ref, SelectHTMLAttributes } from "react"
import s from "./Select.module.css"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: boolean
}

const Select = (
  { label, error, placeholder, required, children, ...rest }: SelectProps,
  ref: Ref<HTMLSelectElement>
) => {
  return (
    <label className={clsx(s.root, error && s.error)}>
      {label && (
        <span className={s.label}>
          {label}
          {required && " *"}
        </span>
      )}
      <select className={s.select} required={required} ref={ref} {...rest}>
        <option hidden value="">
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  )
}

export default forwardRef(Select)

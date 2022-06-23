import clsx from "clsx"
import { ButtonHTMLAttributes, forwardRef, Ref } from "react"
import s from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (
  { className, children, ...rest }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button className={clsx(s.root, className)} ref={ref} {...rest}>
      {children}
    </button>
  )
}

export default forwardRef(Button)

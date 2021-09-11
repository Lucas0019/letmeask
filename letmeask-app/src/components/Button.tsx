import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss'

type ButttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButttonProps) => {
  
  return (
    <button className="button" {...props }/>
  )
}


import React from 'react'
import {ButttonContainer} from "./styles";

const Button =({title, variant = "primary", onClick}) =>{
  return (
    <ButttonContainer variant={variant} onClick={onClick}>
        {title}
    </ButttonContainer>
  )
}

export { Button }

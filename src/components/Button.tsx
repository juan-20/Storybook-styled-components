import PropTypes from "prop-types"
import { Btn } from "./styles";

interface ButtonProps {
  label?: string
  backgroundColor?: 'Laranja' | 'Azul' ,
  handleClick?: () => void
  disable?: boolean
}

function Button(props: ButtonProps) {
  const {
    label,
    backgroundColor,
    handleClick,
    disable
  } = props;

 let bg = ''
 if(backgroundColor === 'Laranja') bg = '#C62C00'
 if(backgroundColor === 'Azul') bg = '#13637A'

  console.log(bg, disable)

  return (
    <Btn disabled={disable} background={bg} onClick={handleClick} >
      {label}
    </Btn>
  )
}

export default Button
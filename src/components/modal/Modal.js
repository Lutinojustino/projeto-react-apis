import { BoxModal } from "./styled"

export const Modal = (props) => {
  
  return(
    <BoxModal>
      {props.optionModal === 1? 
      <>
        <h1>Gotcha!</h1>
        <h5>O Pokémon foi adicionado a sua Pokédex</h5>
      </>
        : 
      <>
        <h1>Oh, no!</h1>
        <h5>O Pokémon foi removido da sua Pokédex</h5>
      </>
      }
    </BoxModal>
  )
}
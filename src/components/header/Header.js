import logoPokemon from "../../assets/logo-pokemon.png";
import { goToHomePage, goToPokedexPage } from "../../router/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import {
  ButtonBlack,
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  Container,
} from "./styled";

export const Header = (props) => {
  const navigate = useNavigate();
  const { name } = useParams();
  const context = useContext(GlobalContext);
  const { listPokedex, sendToPokedex, deletePokemon } = context;

  const [button, setButton] = useState("");

  const updateButton = (name) => {
    const newList = [...listPokedex];
    const pokemonFound = newList.filter((element) => element.name == name);

    if (pokemonFound.length === 0) {
      return setButton(
        <ButtonGreen onClick={() => sendToPokedex(name)}>Capturar!</ButtonGreen>
      );
    } else {
      return setButton(
        <ButtonRed onClick={() => deletePokemon(name)}>
          <span>X</span>
          <p>Excluir da Pokédex</p>
        </ButtonRed>
      );
    }
  };

  useEffect(() => {
    updateButton(name);
  }, [listPokedex]);

  return (
    <Container screen={true}>
      <div>
        <span>
          {props.isAllPokemons && (
            <ButtonBlack onClick={() => goToHomePage(navigate)}>
              &lt; <p>Todos os Pokemóns</p>
            </ButtonBlack>
          )}
        </span>
        <img src={logoPokemon} />
        <span>
          {props.isHomePage && (
            <ButtonBlue onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </ButtonBlue>
          )}
          {props.isDetailPage && button}
        </span>
      </div>
    </Container>
  );
};

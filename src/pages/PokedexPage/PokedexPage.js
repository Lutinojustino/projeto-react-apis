import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card } from "../../components/Card/Card";
import { Container, Main } from "./styled";

export const PokedexPage = (props) => {
  const context = useContext(GlobalContext);
  const { listPokedex, deletePokemon } = context;

  return (
    <>
      <Header isAllPokemons={true} />
      <Main>
        <Container>
          <h1>Meus Pokémons</h1>
          <div>
            {listPokedex.map((item) => {
              return (
                <div key={item.name}>
                  <Card
                    pokemon={item}
                    deletePokemon={deletePokemon}
                    isPokedexPage={true}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

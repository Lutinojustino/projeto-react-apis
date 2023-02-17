import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import axios from "axios";
import { CardHome } from "../../components/Card/CardHome";
import { Footer } from "../../components/footer/Footer";
import { Container, Main } from "./styled";

export const HomePage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=150&offset=00"
      );
      setPokemonData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header isHomePage={true} />
      <Main>
        <Container>
          <h1>Todos Pokémons</h1>
          <div>
            {pokemonData &&
              pokemonData.map((item) => {
                return (
                  <div key={item.name}>
                    <CardHome name={item.name} />
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

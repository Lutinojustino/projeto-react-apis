// import {Footer} from "../Footer/Footer"
import styled from "styled-components";
import { goToPokedexPage, goToHomePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Container, Main } from "./styled";
import { Footer } from "../../components/footer/Footer";



export const ErrorPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Header isAllPokemons={true} />
      <Main>
        <Container>
          <h1>ERROR PAGE</h1>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

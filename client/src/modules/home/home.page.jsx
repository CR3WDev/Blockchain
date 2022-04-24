import React from "react";
import { Header } from "../../components/header";
import { Shop } from "../../components/shop";
import { Container } from "./home.styled";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Shop />
    </Container>
  );
};

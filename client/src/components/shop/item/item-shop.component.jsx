import React from "react";
import { Container, ImageBox, TextBox } from "./item-shop.styled";

export const ItemShop = (params) => {
  const { crypto } = params;

  return (
    <Container>
      <ImageBox>
        <div>
          <img src={crypto.image} alt="icon" />
        </div>
        <div>
          <h3>{crypto.name}</h3>
          <span>{crypto.symbol}</span>
        </div>
        <div>
          <span>{crypto.value}</span>
        </div>
      </ImageBox>
      <TextBox>
        <span>{crypto.quantity}</span>
      </TextBox>
    </Container>
  );
};

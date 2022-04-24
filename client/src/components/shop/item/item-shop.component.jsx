import { Button } from "@mui/material";
import React from "react";
import { useCount } from "../../../context/count";
import { api } from "../../../services/api";
import { EditItem } from "./edit-item";
import { Container, CryptoData, ImageBox, ButtonBox } from "./item-shop.styled";

export const ItemShop = (props) => {
  const { count, setCount } = useCount();
  const { data } = props;

  const removeCrypto = (id) => {
    api.delete(`cryptos/${id}`).then(() => {
      setCount(count + 1);
    });
  };

  return data.map((crypto) => {
    const currentValue = (crypto.quantity * crypto.currentPrice).toFixed(2);
    return (
      <Container key={crypto.id}>
        <ImageBox>
          <img src={crypto.image} alt="icon" />
        </ImageBox>
        <CryptoData>
          <div>
            <h3 style={{ textTransform: "uppercase" }}>{crypto.symbol}</h3>
            <span>{crypto.currentPrice} USD</span>
          </div>
          <div>
            <h3>Quantity</h3>
            <span>{crypto.quantity}</span>
          </div>
          <div>
            <h3>Total Value</h3>
            <span>{currentValue} USD</span>
          </div>
        </CryptoData>
        <ButtonBox>
          <EditItem cryptoId={crypto.id} cryptoQuantity={crypto.quantity} />
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              removeCrypto(crypto.id);
            }}
          >
            delete
          </Button>
        </ButtonBox>
      </Container>
    );
  });
};

import React from "react";
import { Button, TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { AmountBox, Container, InputBox, ItemsBox } from "./shop.styled";
import { api } from "../../services/api";
import { ItemShop } from "./item";

export const Shop = () => {
  const [autoCompleteValue, setAutoCompleteValue] = React.useState("");
  const [allCryptos, setAllCryptos] = React.useState([]);
  const [userCryptos, setUserCryptos] = React.useState([]);

  React.useEffect(() => {
    getAllCryptos();
    getUserCryptos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllCryptos = () => {
    api.get("wallet/AllCryptos").then((data) => {
      setAllCryptos(data.data);
    });
  };
  const getUserCryptos = () => {
    api.get("cryptos").then((data) => {
      setUserCryptos(data.data);
    });
  };

  const saveCrypto = (id, quantity) => {
    api
      .post("cryptos", {
        id,
        quantity,
      })
      .then(() => {
        getUserCryptos();
      });
  };

  const getCryptoBySymbolAndSave = (symbol) => {
    allCryptos.map((crypto) => {
      if (crypto.symbol === symbol) {
        saveCrypto(crypto.id, 150);
      }
      return null;
    });
  };

  const handleOnAddClick = () => {
    getCryptoBySymbolAndSave(autoCompleteValue);
  };
  return (
    <Container>
      <h2>My Current Portfolio</h2>
      <InputBox>
        <Autocomplete
          inputValue={autoCompleteValue}
          onInputChange={(_event, newInputValue) => {
            setAutoCompleteValue(newInputValue);
          }}
          id="combo-box-demo"
          options={allCryptos.map((crypto) => crypto.symbol)}
          sx={{ width: 150, marginRight: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Token Symbol" />
          )}
        ></Autocomplete>
        <AmountBox>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            sx={{ marginRight: 1 }}
          />
          <Button
            variant="contained"
            style={{ height: 56 }}
            onClick={() => handleOnAddClick()}
          >
            ADD
          </Button>
        </AmountBox>
      </InputBox>
      <ItemsBox>
        {userCryptos.map((data) => {
          return <ItemShop crypto={data} key={data.id} />;
        })}
      </ItemsBox>
    </Container>
  );
};

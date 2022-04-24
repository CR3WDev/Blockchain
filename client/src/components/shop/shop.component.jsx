import React from "react";
import { Button, TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { AmountBox, Container, InputBox, ItemsBox } from "./shop.styled";
import { api } from "../../services/api";
import { ItemShop } from "./item";
import { useCount } from "../../context/count";

export const Shop = () => {
  const { count, setCount } = useCount();
  const [autoCompleteValue, setAutoCompleteValue] = React.useState("");
  const [amountValue, setAmountValue] = React.useState(1);
  const [allCryptos, setAllCryptos] = React.useState([]);
  const [userCryptos, setUserCryptos] = React.useState([]);

  React.useEffect(() => {
    getUserCryptos();
    getAllCryptos();
    getCryptosNotSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const getAllCryptos = () => {
    api.get("wallet/allCryptos").then((data) => {
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
        setCount(count + 1);
      });
  };

  const getCryptosNotSelected = () => {
    let userCryptosSymbols = userCryptos.map((crypto) => {
      return crypto.symbol;
    });

    let result = allCryptos.filter(
      (crypto) => !userCryptosSymbols.includes(crypto.symbol)
    );
    return result;
  };

  const getCryptoBySymbolAndSave = (symbol) => {
    allCryptos.map((crypto) => {
      if (crypto.symbol === symbol) {
        saveCrypto(crypto.id, amountValue);
      }
      return null;
    });
  };
  const isValidFields = () => {
    return isAmountValid() && isSymbolValid() ? true : false;
  };
  const isAmountValid = () => {
    return amountValue > 0 ? true : false;
  };
  const isSymbolValid = () => {
    let result = false;
    getCryptosNotSelected().map((cryptos) => {
      if (cryptos.symbol === autoCompleteValue) {
        result = true;
        return null;
      }
    });
    return result;
  };
  const handleOnAddClick = () => {
    if (isValidFields()) {
      getCryptoBySymbolAndSave(autoCompleteValue);
      setAutoCompleteValue("");
    }
  };
  return (
    <>
      <Container>
        <h2>My Portfolio</h2>
        <InputBox>
          <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={autoCompleteValue}
            onChange={(_event, newInputValue) => {
              setAutoCompleteValue(newInputValue);
            }}
            id="combo-box-demo"
            options={getCryptosNotSelected().map((crypto) => crypto.symbol)}
            sx={{ width: 150, marginRight: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Token Symbol" />
            )}
          ></Autocomplete>
          <AmountBox>
            <TextField
              value={amountValue}
              id="outlined-basic"
              label="Amount"
              type="number"
              onChange={(event) => {
                setAmountValue(event.target.value);
              }}
              style={{ width: 150 }}
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
          <ItemShop data={userCryptos} />
        </ItemsBox>
      </Container>
    </>
  );
};

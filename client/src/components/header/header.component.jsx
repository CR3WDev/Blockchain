import React from "react";
import "./header.styled";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import me from "../../assets/me.jpeg";
import { api } from "../../services/api";
import { useCount } from "../../context/count";
import {
  Container,
  Content,
  LogoBox,
  TotalBalanceBox,
  UserBox,
} from "./header.styled";

export const Header = () => {
  const { count } = useCount();
  const [totalBalance, setTotalBalance] = React.useState(0);

  React.useEffect(() => {
    getTotalBalance();
  }, [count]);

  const getTotalBalance = () => {
    api.get("/wallet/totalBalance").then((data) => {
      setTotalBalance(data.data);
    });
  };

  return (
    <Container>
      <LogoBox>
        <MdAccountBalanceWallet size="50px" />
        <h1>WALLET</h1>
      </LogoBox>
      <Content>
        <TotalBalanceBox>
          <IoWallet size="30px" color="#87d682"></IoWallet>
          <div>
            <span>Total Balance</span>
            <span>{totalBalance.toFixed(2)} USD</span>
          </div>
        </TotalBalanceBox>
        <UserBox>
          <img src={me} alt="Profile" />
        </UserBox>
      </Content>
    </Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background: #001c71;
  display: flex;
`;
export const LogoBox = styled.div`
  background: #29418a;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`;
export const Content = styled.div`
  width: calc(100vw - 300px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    & {
      width: 100vw;
    }
  }
`;
export const TotalBalanceBox = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 30px;
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
  span:first-child {
    color: white;
  }
  span:last-child {
    color: #87d682;
  }
`;
export const UserBox = styled.div`
  img {
    width: 60px;
    border-radius: 50%;
  }
  margin-top: 7px;
  margin-right: 30px;
`;

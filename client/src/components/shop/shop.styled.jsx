import styled from "styled-components";

export const Container = styled.div`
  border-radius: 14px;
  margin: 30px;
  padding: 30px;
  box-shadow: 0px 0px 8px #eee;
`;
export const AmountBox = styled.div`
  @media screen and (max-width: 700px) {
    & {
      margin-top: 20px;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    & {
      flex-direction: column;
    }
  }
`;
export const ItemsBox = styled.div`
  margin-top: 50px;
  height: 400px;
  overflow: auto;
  padding: 30px;
`;

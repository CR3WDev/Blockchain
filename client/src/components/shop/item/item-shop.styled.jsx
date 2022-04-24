import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  img {
    width: 50px;
  }
  @media (max-width: 700px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
export const CryptoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    color: #001c71;
  }
  h3 {
    margin: 0;
  }
  span {
    text-transform: uppercase;
    color: #666;
  }
  @media (max-width: 700px) {
    & {
      flex-direction: column;
      align-items: start;

      div {
        margin-bottom: 10px;
      }
    }
  }
`;
export const ImageBox = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

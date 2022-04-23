import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  img {
    width: 50px;
  }
`;
export const TextBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageBox = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    color: #001c71;
  }
  h3 {
    margin: 0;
  }
  span {
    text-transform: uppercase;
    color: #666;
  }
`;

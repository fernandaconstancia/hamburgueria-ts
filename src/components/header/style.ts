import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.grey0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  padding: 10px 110px;

  > div {
    display: flex;
    padding: 5px;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  margin: 0 10px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;

  input {
    border: none;
    outline: none;
    background: #ffffff;

    &::placeholder {
      color: #e0e0e0;
    }
  }
`;

export const Search = styled.div`
  background: #27ae60;
  padding: 6px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  svg {
    color: #ffffff;
    width: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    color: #bdbdbd;
    margin: 0 10px;
    width: 28px;
  }
`;

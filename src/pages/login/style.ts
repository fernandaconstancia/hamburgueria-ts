import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
`;

export const BoxLogin = styled.div`
  border: 2px solid #f5f5f5;
  padding: 26px;
  margin-right: 62px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 18px;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 12px;
  }

  input {
    border: 2px solid #f5f5f5;
    padding: 10px 7px;
    outline: none;
    background: #f5f5f5;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 18px;

    &::placeholder {
      color: #999999;
    }

    &:focus {
      border: 2px solid #333333;
      background: #ffffff;
    }
  }

  button {
    padding: 16px 0;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #27ae60;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 18px;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const Singup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 12px;
    width: 80%;
    margin-bottom: 18px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    padding: 16px 0;
    width: 100%;
    border-radius: 8px;
    border: none;
    background: #f5f5f5;
    color: #999999;
    font-size: 16px;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
      color: #333333;
    }
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }
`;

export const BoxText = styled.div`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 380px;
  margin-bottom: 30px;

  .imageBox {
    background: #93d7af;
    min-width: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 8px;

    img {
      margin: 10px 0;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    margin-left: 10px;
  }
`;

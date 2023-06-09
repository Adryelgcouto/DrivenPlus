import styled from "styled-components";

export const ContentRegister = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  justify-content: center;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      width: 299px;
      height: 52px;
      border: none;
      border-radius: 8px;
      margin-top: 16px;
      padding-left: 14px;
      font-size: 14px;

    }
    button{
      width: 299px;
      height: 52px;
      border: none;
      border-radius: 8px;
      background-color: #FF4791;
      margin-top: 24px;
      color: white;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 24px;
    }
    a{
      color: white;
      font-size: 14px;
    }

  }
`;

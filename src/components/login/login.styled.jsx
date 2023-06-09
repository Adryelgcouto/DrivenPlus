import styled from "styled-components";


export const ContentLogin = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & div{
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
      width: 299px;
    }
    input:nth-child(2){
      margin-top: 100px;
      margin-bottom: 16px;
    }
    input:nth-child(3){
      margin-bottom: 24px;
    }
    input{
      width: 299px;
      height: 52px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 400;
      border: none;
      padding-left: 14px ;
    }
    button{
      width: 299px;
      height: 52px;
      border-radius: 8px;
      border: none;
      background-color: #FF4791;
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


`
import styled from "styled-components";

export const ContentSubscriptions = styled.div`
  main {
    p{
      color: white;
    }
    & div:nth-child(1) {
      h3 {
        margin-left: 20px;
        margin-top: 12px;
        margin-bottom: 22px;
      }
      img {
        width: 139.38px;
      }
      width: 100vw;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    & div:nth-child(2) {
      margin-left: 40px;
      span {
        color: white;
        font-size: 16px;
      }
      & div:nth-child(1) {

        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 1px;
        }
      }
      p{
        margin-left: 2px;
      }
      & div:nth-child(4) {
        margin-top: 12px;
      }
    }
  }
  h3 {
    color: white;
    font-size: 32px;
    font-weight: bold;
  }
`;

export const InputValidate = styled.div`
margin-top: 34px;
margin-left: 40px;
  display: flex;
  flex-direction: column;
  input{
    margin-bottom: 8px;
    width: 299px;
    height: 52px;
    border-radius: 8px;
    border: none;
    padding-left:14px ;
  }
  div{
    input{
      width: 145px;
      margin-right: 9px;
    }

  }
  button{
    width: 299px;
    height: 54px;
    border-radius: 8px;
    border: none;
    background-color: #FF4791;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

`

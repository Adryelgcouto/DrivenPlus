import styled from "styled-components";

export const ContentPlanos = styled.div`
  display:flex;
 flex-direction: column;
  justify-content: center;
  h1{
    color: white;
  }
  & div{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 32px;
      font-weight: bold;
      margin-top: 29px;
      margin-bottom: 24px;
    }
    div{
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 290px;
      height: 180px;
      border-radius: 5px;
      margin-bottom: 10px;

      h2{
      color: white;
    }
    }
    
  }


`
import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  width: 100vw;
  background-color: #5D5D5D;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  div{
    /* border: 1px red solid; */
    height: 80px;
    max-width: 1275px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  p{
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;
    color: #C4C4C4;
  }
  span{
    display: flex;
    align-items: center;
    gap: 5px;
    a{
      display: flex;
      align-items: center;
    }
  }
  img{
    width: 20px;
    filter: invert();
    &:hover{
      filter: none;
    }
    &:active{
      filter: brightness(1.5);
    }
  }
  `
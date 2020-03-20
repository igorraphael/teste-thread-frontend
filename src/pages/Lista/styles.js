import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;

  h1{
    margin:50px 0;
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  justify-content: center;
  >div{
    width: 50%;
  }
  button{
    background: #03a5fc;
    border: 0;
    border-radius: 6px;
    height: 36px;
    padding: 0 15px;
    color: #fff;
    margin: 0 10px;
    &:hover{
      background: #0373fc; 
    }
  }
  span{
    z-index: 9;
    margin: 0 5px;
    font-weight: bold;
    color: red;
  }
`;

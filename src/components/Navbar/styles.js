import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  .nav-active{
    border-bottom: 2px solid blue;
  }
  a{
    margin: 0 30px;
    font-size: 18px;
    padding: 10px 10px;
    color: black;
    &:hover{
      border-bottom: 2px solid blue;
    }
    &:visited{
      color: black;
    }
  }
  
`;

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
  .margin-r{
    margin-right: 10px;
  }
  .group-select{
    margin-top: 10px;
    display: flex;
    input{
      width: 48%;
    }
    > div{
      flex-grow: 1;
    }
  }
  .btn_group{
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
  .bg-orange{
    background: #fc9c26;
  }
  .inp-group{
    margin-top: 10px;
    display: flex;
    div{
      flex-grow: 1;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input[class="inp-custom"]{
      width: 100%;
      border-radius: 6px;
      height: 38px;
      padding: 0 15px;
      margin: 0 10px 10px;
    }
    h4{
      text-align: start;
      margin-left: 15px;
      margin-bottom: 10px;
    }
    button{
      background: green;
      border: 0;
      border-radius: 6px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 10px;
      &:hover{
        border: 3px solid #c3c3c3;
      }
    }
  }
  span{
    color: red;
    
  }
`;

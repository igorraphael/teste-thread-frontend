import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  /* align-items: center; */
    
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;

  .btn_group{
    display: flex;
    justify-content: space-around;
  }
  .bg-orange{
    background: #fc9c26;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border-radius: 6px;
      height: 36px;
      padding: 0 15px;
      margin: 0 10px 10px;
      &:nth-child(3){
        margin-left: 20px;
        width: 200px;
      }
    }

    div{
      display: flex;
      align-items: center;
      input {
        &:nth-child(2){
          flex-grow: 1;
        }
      }
    }
    .inp-md{
      width: 400px;
    }
    .address{
      margin-left: 15px;
      margin-bottom: 10px;
    }
    h4{
      text-align: start;
    }
    button{
      background: green;
      border: 0;
      border-radius: 6px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

    }
    

  }
`;

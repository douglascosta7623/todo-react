import styled from 'styled-components';

export const Container = styled.div`
background: #B83745;
opacity: 0.64;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 120px;
padding: 10px;
margin: 20px 0;
display: flex;
align-items: center;

.image{
  margin-right: 5px;
  font-size: 18px;
  color: #FFFFFF;


}

input{
  border: 0px;
  background: transparent;
  outline: 0;
  color: #FFFFFF;
    font-size: 18px;
  flex: 1;
}

input::placeholder{
  color: #DBDFE7;
  font-size: 18px;
}
`;
import styled from 'styled-components'
type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (`
display: flex;
padding: 20px;
margin-bottom: 10px;
align-items: center;

background: #0E1420;
box-shadow: 0px 10px 20px rgba(15, 22, 35, 0.12);
border-radius: 6px;

input{
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
label{
  color: #CCC;
  text-decoration: ${done ? 'line-through' : 'initial'};
}

`));
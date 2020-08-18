import React from 'react';
import styled from 'styled-components'


export const Form = () => {
  return (
    <WrapperFrom>
      <LabelText>Email:</LabelText>
      <Input type="email" />
      <LabelText>Password:</LabelText>
      <Input type="password" />
      <ButtonSubmit type="submit">Sign in</ButtonSubmit>
    </WrapperFrom>
  )
}
const WrapperFrom = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightpink;
width:65%;
height:100%;
`;
const Input = styled.input`
width:60%;
display:block;
box-sizing:border-box;
`;
const LabelText = styled.label`
display:block;
`;
const ButtonSubmit = styled.button`
text-transform:uppercase;
cursor:pointer;
border:none;
padding-top:1rem;
padding-bottom:1rem;
margin-top:2rem;
width:60%;
background-color:lightcyan;
color:black;
`;
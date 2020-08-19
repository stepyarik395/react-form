import React from 'react';
import styled from 'styled-components'
import { FromHideContent } from './FromHideContent'


export const Form = (props) => {
  return (
    <WrapperFrom className={props.activef ? 'active1' : 'disabler2'}>
      <TitleForm>{props.titleform ? 'Sign-in' : 'Register account'}</TitleForm>
      {props.showinp ? <FromHideContent /> : null}
      <div>
        <LabelText>Email:</LabelText>
        <Input placeholder="email" type="email" />
      </div>
      <div>
        <LabelText>Password:</LabelText>
        <Input placeholder="password" type="password" />
      </div>
      <div>
        <ButtonSubmit type="submit">{props.buttonform ? 'Sign In' : 'Sign Up'}</ButtonSubmit>
      </div>
    </WrapperFrom>
  )
}
const WrapperFrom = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightpink;
width:65%;
height:100%;
`;
export const Input = styled.input`
min-width:300px;
width:100%;
display:block;
box-sizing:border-box;
`;
export const LabelText = styled.label`
display:block;
`;
const ButtonSubmit = styled.button`
padding-left:3rem;
padding-right:3rem;
text-transform:uppercase;
cursor:pointer;
border:none;
padding-top:1rem;
padding-bottom:1rem;
margin-top:2rem;
width:100%;
background-color:lightcyan;
color:black;
&:focus{
  outline:none;
}
&:active{
  outline:none;
}
`;

const TitleForm = styled.h2`
text-align:center;
`;